Ext.define('WTTFT.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
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
                xtype: 'browse',
                title: 'Search',
                iconCls: 'search'
            },
            {
                xtype: 'browse',
                title: 'History',
                iconCls: 'time'
            },
            {
                xtype: 'aboutpanel',
                title: 'Call Teen Link'
            },
            {
                xtype: 'browse',
                title: 'Bookmarks'
            },
            {
                xtype: 'aboutpanel'
            }


        ]
    }
});
