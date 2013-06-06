Ext.define('WTTFT.view.Browse', {
	extend: 'Ext.navigation.View',
	xtype: 'browse',

	config: {
		iconCls: 'search',
        cls: 'findHelp',

        navigationBar: {
            ui: 'findHelp',
            items: [
                {
                    id: 'toggleSearch',
                    align: 'right',
                    hidden: true,
                    iconCls: 'search',
                    iconMask: true
                },
                {    
                    id: 'topicCounter',
                    align: 'right',
                    hidden: true,
                    ui: 'plain',
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
                    ui: 'plain',
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
                xtype: 'topicslist'
            }
		],
		
		listeners: {
            activate: showToolbarButton,
            activeitemchange: showToolbarButton,
            //On show event, unhides the TabBar
			show: function() {
                var tabBar = Ext.getCmp('main').getTabBar();
                tabBar.setUi('findHelp');
                tabBar.show();
			}
		}
	}
});

function showToolbarButton() {
    Ext.get("toggleSearch").hide();
    Ext.get("topicCounter").hide();
    Ext.get("resourceCounter").hide();
    if(this.getActiveItem()['id'] == "topicList") {
        Ext.get("toggleSearch").show();
    }
    if(this.getActiveItem()['id'] == "topicCar") {
        Ext.get("topicCounter").show();
    }
    if (this.getActiveItem()['id'] == "resourceCar") {
        Ext.get("resourceCounter").show();
    }
}