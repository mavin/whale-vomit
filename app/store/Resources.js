Ext.define('WTTFT.store.Resources', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage',  ],

    config: {
        model: 'WTTFT.model.Resource',
        storeId: 'resourceStore',
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
     //        load: function (s, r) {
     //            console.log(r)
     //        }
     //    },

        autoLoad: true
    }
});