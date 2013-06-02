Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',

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
                itemTpl: '{name}',
				grouped: true,
				indexBar: true,
				store: 'topicStore'
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