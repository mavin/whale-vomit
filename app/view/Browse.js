Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',
	id: 'browse',

	config: {
		title: 'Find Help',
		iconCls: 'search2',

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
				indexBar: true,
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
                var tabBar = Ext.getCmp('main').getTabBar();
                tabBar.setUi('dark');
                tabBar.show();
			}
		}
	}
});