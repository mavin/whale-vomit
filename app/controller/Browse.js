Ext.define('WTTFT.controller.Browse', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            browse: 'browse',
            toggleSearch: '#toggleSearch',
            searchField: '#searchField',
            topicList: 'topicslist > list',
            resourcesButton: 'button[text="Find Resources"]',
            resourcesList: 'resourceslist > list'
        },
        control: {
            searchField : {
                clearicontap: 'onSearchClearIconTap',  
                keyup: 'onSearchKeyUp'  
            },
            toggleSearch: {
                tap: 'toggleSearch'
            },
            topicList : {
                itemtap: 'showTopic'
            },
            resourcesButton: {
                tap: 'showResources'
            },
            resourcesList : {
                itemtap: 'showResource'
            }
        }
    },

    toggleSearch: function(button, e, eOpts) {
        var search = Ext.getCmp('searchBar');
        var toggleSearch = Ext.getCmp('toggleSearch');
        if(search.getHidden()) {
            search.show();
            toggleSearch.setIconCls('delete');
        } else {
            search.hide();
            toggleSearch.setIconCls('search');
        }
    },

    showTopic: function(list, index, element, record) {
        store = list.getStore();
        carItems = [];
        store.each(function(record){
            var topic = Ext.create('WTTFT.view.Topic');
            topic.getAt(0).setData(record.data);
            topic.getAt(1).setData(record.data);
            carItems.push(topic);
        });

        this.getBrowse().push({
            xtype: 'flipview',
            items: carItems,
            itemCls: 'topicCar',
            activeItem: index,
            id: 'topicCar',
            listeners: {
                activate: setTopicCounter,
                activeitemchange: setTopicCounter
            }
        });
    },

    showResources: function(button, e, eOpts) {
        var sto = Ext.getStore('resourceStore');
        sto.clearFilter();
        sto.filter([{filterFn: function(item) {
            // if the item has that resource's id in its topic_id array, return true
            return item.get("topic_id").indexOf(button.getData()['id']) >= 0; 
        }}]);
        var resourcesList = Ext.create('WTTFT.view.ResourcesList');
        resourcesList.getAt(0).setStore(sto);
        this.getBrowse().push(resourcesList);
    },

    showResource: function(list, index, element, record) {
        store = list.getStore();
        carItems = [];
        store.each(function(record){
            var resource = Ext.create('WTTFT.view.Resource');
            resource.setData(record.data);
            carItems.push(resource);
        });

        this.getBrowse().push({
            xtype: 'flipview',
            items: carItems,
            activeItem: index,
            id: 'resourceCar',
            listeners: {
                activate: setResourceCounter,
                activeitemchange: setResourceCounter
            }
        });
    },


    onSearchKeyUp: function(field) {  
        //get the store and the value of the field  
        var values = field.getValue(),
            store = Ext.getStore('topicStore');    //  getting the store that drives the contact list  

        store.clearFilter();  
        if(values) {
            var searches = values.split(' '),
                regexes = [];

            for (var i = 0; i < searches.length; i++) {
                regexes.push(new RegExp(searches[i], 'i'));
            };

            store.filterBy(function(record) {
                for(var i = 0; i < regexes.length; i++) {
                    if(!record.get("name").match(regexes[i]))
                        return false;
                }
                return true;
            });
        }
    },  
  
    /** 
     * Called when the user taps on the clear icon in the search field. 
     * It simply removes the filter form the store 
     */  
    onSearchClearIconTap: function() {  
        //call the clearFilter method on the store instance  
        Ext.getStore('topicStore').clearFilter();  
    }  
});

var setTopicCounter = function() {
    Ext.get('topicCounter').setText((this.getItems()['items'].indexOf(this.getActiveItem())+1) + "/" + this.getItems().length);
}

var setResourceCounter = function() {
    Ext.get('resourceCounter').setText((this.getItems()['items'].indexOf(this.getActiveItem())+1) + "/" + this.getItems().length);
}