Ext.define('WTTFT.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'browse'
            },
            {
                xtype: 'callteenlinkpanel'
            },
            {
                xtype: 'aboutpanel'
            },
            {
                xtype: 'carousel',
                iconCls: 'star'
            }
        ]
    }
});
