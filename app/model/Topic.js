Ext.define('WTTFT.model.Topic', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{ name: 'id', type: 'int' },
			{ name: 'name', type: 'string' },
			{ name: 'quote', type: 'string' },
			{ name: 'content', type: 'string' }
		],

		//associations: 
		hasMany: {
            model: 'WTTFT.model.Resource',
            name : 'resources'
        }
	}

});