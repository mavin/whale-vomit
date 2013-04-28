Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',
	id: 'browse',

	config: {
		title: 'Find Help',
		iconCls: 'search',

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
				itemId: 'browse',
				itemTpl: '{name}', 
				title: 'Browse',
				grouped: true,
				indexBar: true,

				store: 'resourceStore'
			}
		]
	}
});