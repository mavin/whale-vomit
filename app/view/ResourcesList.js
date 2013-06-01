Ext.define('WTTFT.view.ResourcesList', {
	extend: 'Ext.navigation.View',
	xtype: 'resourceslist',

	config: {

		navigationBar: false,
        title: 'Find Help',

		items: [
            {
            	xtype: 'list',

        		itemTpl: '{name}',

				grouped: true,
				indexBar: true
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
		]
	}
});