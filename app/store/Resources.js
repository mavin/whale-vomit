Ext.define('WTTFT.store.Resources', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage',  ],

    config: {
        storeId: 'resourceStore',
        model: 'WTTFT.model.Resource',
    	proxy: {
        	type: 'ajax',
        	url: 'resources/data/resources.json',
	        reader: {
	            type: 'json',
	            noCache: false,
	            enablePagingParams: false,
	            limitParam: null
                //rootProperty: 'resources'
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