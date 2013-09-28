Ext.define('WTTFT.model.Resource', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
            // our primary key, set to auto because Sencha expects it
			{ name: 'id', type: 'auto' },
			{ name: 'title', type: 'string' },
            { name: 'subtitle', type: 'string' },
			{ name: 'phone', type: 'string' },
			{ name: 'website', type: 'string' },
			{ name: 'address1', type: 'string' },
			{ name: 'address2', type: 'string' },
			{ name: 'city', type: 'string' },
			{ name: 'state', type: 'string' },
			{ name: 'zip', type: 'string' },
			{ name: 'eligibility', type: 'string' },
			{ name: 'description', type: 'string' },

            // Don't print these to the page
            // but keep them in the store for analytics
            { name: 'agencyName', type: 'string' },
            { name: 'agencyId', type: 'int' },
            { name: 'serviceName', type: 'string' },
            { name: 'serviceId', type: 'int' },
            { name: 'isMapped', type: 'boolean' }
		]
	}
	//associations: 
});