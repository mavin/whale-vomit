Ext.define('WTTFT.store.Resources', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage' ],

    config: {
        storeId: 'resourceStore',
        model: 'WTTFT.model.Resource',
        // data: [
        //     { id: 1, name: 'one', topic_id: 1 },
        //     { id: 2, name: 'two', topic_id: 2 },
        //     { id: 3, name: 'ghree', topic_id: 2 },
        //     { id: 4, name: 'four', topic_id: 3 },
        //     { id: 5, name: 'jive', topic_id: 1 },
        //     { id: 6, name: 'size', topic_id: 3 },
        //     { id: 7, name: 'seven', topic_id: 3 },
        //     { id: 8, name: 'teight', topic_id: 3 },
        //     { id: 9, name: 'nine', topic_id: 1 }
        // ],
    	proxy: {
        	type: 'ajax',
        	url: 'resources/data/test.json',
	        reader: {
	            type: 'json',
	            noCache: false,
	            enablePagingParams: false,
	            limitParam: null,
                rootProperty: 'resources'
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