Ext.define('WTTFT.view.TopicsList', {
	extend: 'Ext.navigation.View',
	xtype: 'topicslist',

	config: {

		navigationBar: false,
        title: 'Find Help About:',
        id: 'topicList',

		items: [
			 {
                xtype: 'toolbar',
                docked: 'top',
				id: 'searchBar',
				hidden: true,

                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search...',
                        id: 'searchField'
                    },
                    { xtype: 'spacer' },
                ]
            },
            {
                xtype: 'list',
                itemTpl: '{name}',
                grouped: true,
                indexBar: true,
                store: 'topicStore'
            }
		]
	}
});