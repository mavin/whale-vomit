Ext.define('WTTFT.model.Topic', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{ name: 'keyword', type: 'auto' },
			{ name: 'title', type: 'string' },
			{ name: 'quote', type: 'string' },
			{ name: 'content', type: 'string' },
            { name: 'parent_id', type: 'auto' }
		],

        idProperty: 'keyword',

        associations: [
            {
                type: 'belongsTo',
                model: 'WTTFT.model.Topic',
                name: 'parent',
                foreignKey: 'parent_id'
            },
            {
                type: 'hasMany',
                model: 'WTTFT.model.Resources',
                name: 'resources'
            }
        ]
	}
});