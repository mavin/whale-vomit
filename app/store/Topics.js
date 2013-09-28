Ext.define('WTTFT.store.Topics', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage' ],

    config: {
        storeId: 'topicStore',
        model: 'WTTFT.model.Topic',
    	proxy: {
        	type: 'ajax',
        	url: 'resources/data/topics.json',
	        reader: {
	            type: 'json',
	            noCache: false,
	            enablePagingParams: false,
	            limitParam: null
                //rootProperty: 'topics'
	        }
	    },
        grouper: {
            groupFn: function(record) {
                return record.get('title')[0];
            }
        },
        autoLoad: true
    }
});