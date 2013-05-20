Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',
	id: 'browse',

	config: {
		title: 'Find Help',
		iconCls: 'search',

		navigationBar: {
            items: [
                {
                    html: 'text',
                    align: 'right'
                }
            ]
        },

		items: [
            {
            	xtype: 'list',
            	title: 'Find Help',
                color: 'white',
        		itemTpl: '{name}',
				grouped: true,
				indexBar: false,
				store: 'resourceStore'
            }
            // ,{
            //     xtype: 'toolbar',
            //     docked: 'bottom',

            //     items: [
            //         { xtype: 'spacer' },
            //         {
            //             xtype: 'searchfield',
            //             placeHolder: 'Search...',
            //             id: 'browseSearch'
            //         },
            //         { xtype: 'spacer' }
            //     ]
            // }
		],
		
		listeners: {
			//On show event, unhides the TabBar
			show: function() {
				Ext.getCmp('main').getTabBar().show();
			}
		}
	}
});