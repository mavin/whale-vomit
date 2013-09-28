Ext.define('WTTFT.store.Resources', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage' ],

    config: {
        storeId: 'resourceStore',
        model: 'WTTFT.model.Resource',
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

        autoLoad: true
    }
});