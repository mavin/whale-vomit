Ext.define('WTTFT.store.Topics', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage',  ],

    config: {
        storeId: 'topicStore',
        model: 'WTTFT.model.Topic',
        // data: [
        //     { id: 1, name: 'My first topicStore' },
        //     { id: 2, name: 'Another one in the list' },
        //     { id: 3, name: 'How about this topic' },
        //     { id: 4, name: 'Hello' },
        //     { id: 5, name: 'Hello again' }
        // ],
    	proxy: {
        	type: 'ajax',
        	url: 'resources/data/test.json',
	        reader: {
	            type: 'json',
	            noCache: false,
	            enablePagingParams: false,
	            limitParam: null,
                rootProperty: 'topics'
	        }
	    },

        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },

	    // listeners: {
     //        load: function (store, record) {
     //            resourceCar = Ext.ComponentManager.get('resourceCar');
     //            store.each(function(record){
     //                //console.log(record);
     //                resourceCar.add({
     //                    html: '<p>' + record.get('agencyName') + ' ' + record.get('serviceName') + '</p>'
     //                });
     //            });
     //        }
     //    },

        autoLoad: true
    }
});