Ext.define('WTTFT.model.Resource', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{ name: 'id', type: 'auto' },
			{ name: 'agencyName', type: 'string' },
			{ name: 'serviceName', type: 'string' },
			{ name: 'phone', type: 'string' },
			{ name: 'address1', type: 'string' },
			{ name: 'address2', type: 'string' },
			{ name: 'city', type: 'string' },
			{ name: 'state', type: 'string' },
			{ name: 'zip', type: 'string' },
			{ name: 'eligibility', type: 'string' },
			{ name: 'description', type: 'string' },
			{ name: 'agencyWebsite', type: 'string' },
            { name: 'serviceWebsite', type: 'string' },
			/* 
			For now, we'll generate a canonical name by joining the agencyName
			and the serviceName. Ross will work with Teen Link Staff to find a 
			better solution for this.
			*/
			{ 
				name: 'name',
				type: 'string',
				convert: function(v, rec) {
					return rec.get('agencyName')
					+ ': ' + rec.get('serviceName');
				}
			},
            /*
            Ideally we'd be able to handle this logic before we store both web
            addresses in a model, but Ross hasn't quite figured out a way to do
            that yet. More research needed.
             */
            {
                name: 'website',
                type: 'string',
                convert: function(v, rec) {
                    var serv = rec.get('serviceWebsite');
                    return (serv) ? serv : rec.get('agencyWebsite');
                }
            }
		],
		/*
		We'll keep the primary keys simple for now, but we are trying to 
		figure out a way to piggy back on the Resource House Agency IDs so 
		and edits from them overwrite the information we have.
		*/
		identifier: {
            type: 'simple'
        }
	}
	//associations: 
});