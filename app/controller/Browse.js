Ext.define('WTTFT.controller.Browse', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            browse: 'browse',
            topicList: 'browse > list',
            resourcesButton: 'button[text="Resources"]',
            resourcesList: 'resourceslist > list'
        },
        control: {
            // '#browseSearch' : {  //  the id or itemId we gave our searchfield  
            //     scope: this,  
            //     clearicontap: this.onSearchClearIconTap,  
            //     keyup: this.onSearchKeyUp  
            // },
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

    // 
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
            activeItem: index,

            navigationBar: {
                items: [
                    {
                        text: 'text',
                        align: 'right'
                    }
                ]
            }
        });
    },

    showResources: function(button, e, eOpts) {
        var sto = Ext.getStore('resourceStore');
        sto.clearFilter();
        sto.filter([{filterFn: function(item) {
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

            navigationBar: {
                items: [
                    {
                        text: 'text',
                        align: 'right'
                    }
                ]
            }
        });
    },

    // THIS IS ALL USELESS SEARCH STUFF FOR THE MOMENT
    // Leaving it in for future use
    // onSearchKeyUp: function(field) {  
    //     console.log("searching now");
    //     //get the store and the value of the field  
    //     var value = field.getValue(),  
    //     store = this.getResourceStore();    //  getting the store that drives the contact list  
  
    //     //first clear any current filters on thes tore  
    //     store.clearFilter();  
  
    //     //check if a value is set first, as if it isnt we dont have to do anything  
    //     if (value) {  
    //         //the user could have entered spaces, so we must split them so we can loop through them all  
    //         var searches = value.split(' '),  
    //         regexps = [],  
    //         i;  
  
    //         //loop them all  
    //         for (i = 0; i < searches.length; i++) {  
    //             //if it is nothing, continue  
    //             if (!searches[i]) continue;  
  
    //             //if found, create a new regular expression which is case insenstive  
    //             regexps.push(new RegExp(searches[i], 'i'));  
    //         }  
  
    //         //now filter the store by passing a method  
    //         //the passed method will be called for each record in the store  
    //         store.filter(function(record) {  
    //             var matched = [];  

    //             //loop through each of the regular expressions  
    //             for (i = 0; i < regexps.length; i++) {  
    //                 var search = regexps[i],  
    //                 didMatch = record.get('agencyName').match(search) ||  
    //                             record.get('serviceName').match(search);  

    //                 //if it matched the first or last name, push it into the matches array  
    //                 matched.push(didMatch);  

    //             }  //if nothing was found, return false (dont so in the store)                 

    //             if (regexps.length > 1 && matched.indexOf(false) != -1) {  
    //                 return false;  
    //             } else {  
    //                 //else true true (show in the store)  
    //                 return matched[0];  
    //             }  
    //         });  
    //     }  
    // },  
  
    /** 
     * Called when the user taps on the clear icon in the search field. 
     * It simply removes the filter form the store 
     */  
    onSearchClearIconTap: function() {  
        //call the clearFilter method on the store instance  
        Ext.getCmp('resourceStore').getStore().clearFilter();  
    }  
});