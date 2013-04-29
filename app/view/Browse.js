Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.List',
	xtype: 'browse',
	id: 'browse',

	config: {
		title: 'Find Help',
		iconCls: 'search',
		itemId: 'browse',
		itemTpl: '{name}',

		grouped: true,
		indexBar: true,

		store: 'resourceStore',

		items: [
            {
                xtype: 'titlebar',
                docked: 'top',

                title: 'Find Help'
            },
            {
                xtype: 'toolbar',
                docked: 'top',

                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search...',
                        id: 'browseSearch'
                    },
                    { xtype: 'spacer' }
                ]
            }
		]
	}
});