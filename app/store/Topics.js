Ext.define('WTTFT.store.Topics', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.LocalStorage',  ],

    config: {
        model: 'WTTFT.model.Topic',
        storeId: 'topicStore',
        proxy: {
            type: 'ajax',
            url: 'resources/data/topics.json',
            reader: {
                type: 'json',
                noCache: false,
                enablePagingParams: false,
                limitParam: null
                //rootProperty: 'resources'
            }
        },

        autoLoad: true
    }
});