Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',

	config: {
		title: 'Find Help',
		iconCls: 'search',

        navigationBar: {
            items: [
                {    
                    id: 'topicCounter',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    id: 'resourceCounter',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
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
            activeitemchange: function () {
                Ext.get("topicCounter").hide();
                Ext.get("resourceCounter").hide();
                if(this.getActiveItem()['id'] == "topicCar") {
                    Ext.get("topicCounter").show();
                }
                if(this.getActiveItem()['id'] == "resourceCar") {
                    Ext.get("resourceCounter").show();
                }
            },
			show: function() {
				Ext.getCmp('main').getTabBar().show();
			}
		}
	}
});