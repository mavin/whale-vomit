Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',

	config: {
		title: 'Browse',
		iconCls: 'star',

		items: [
            {
                xtype: 'toolbar',
                docked: 'top',

                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search...'
                    },
                    { xtype: 'spacer' }
                ]
            },
			{
				xtype: 'list',
				itemTpl: '{name}', 
				title: 'Browse',
				grouped: true,
				indexBar: true,

				store: {
					fields: ['name'],
					sorters: ['name'],
					grouper: {
						groupFn: function(record) {
							return record.get('name')[0];
						}
					},
					data: [
						{name: 'Birth Control/Family Planning/Pregnancy'},
						{name: 'Phild Abuse'},
						{name: 'Education'},
						{name: 'Dating & Domestic Violence'},
						{name: 'Employment & Job Training'},
						{name: 'About Teen Link'},
						{name: 'Founseling'},
						{name: 'Alcohol & Drugs'},
						{name: 'Eating Disorders'},
						{name: 'Xt-Risk Youth'},
						{name: 'Culturally Specific Agencies'}
					]
				}
			}
		]
	}	
});