Ext.define('WTTFT.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        ui: 'dark',
        pack: 'center',
        items: [
            {
                xtype: 'homepanel',
                listeners: {
                    //whenever the home icon in the tabPanel is activated, the tabPanel will be hidden.
                    activate: function() {
                       Ext.getCmp('main').getTabBar().hide();
                    }
                }
            },
            {
                xtype: 'browse'
            },
            {
                xtype: 'callteenlinkpanel'
            },
            {
                xtype: 'aboutpanel'
            }
        ],
        listeners: {
            //Hides the tapPanel once the homescreen is shown
            show: function() {
                Ext.getCmp('main').getTabBar().hide();
            }
        }
    }
});
