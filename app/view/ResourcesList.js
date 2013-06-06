Ext.define('WTTFT.view.ResourcesList', {
	extend: 'Ext.navigation.View',
	xtype: 'resourceslist',

	config: {

		navigationBar: false,
        title: 'Find Help From...',
        id: 'resourceList',

		items: [
            {
            	xtype: 'list',

        		itemTpl: '{name}',

				grouped: true,
				indexBar: true
            }
		]
	}
});