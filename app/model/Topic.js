Ext.define('WTTFT.model.Topic', {
	extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'shortName', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'refTopic', type: 'int' }
        ]
    }
    //associations:
});