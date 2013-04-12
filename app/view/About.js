Ext.define('WTTFT.view.About', {
	extend: 'Ext.Container',
	xtype: 'aboutpanel',

	config: {
		title: 'About',
		iconCls: 'info',
		cls: 'info',
		scrollable: true,
		styleHtmlContent: true,
		layout: 'hbox',
		items: [
			{
				xtype: 'titlebar',
				title: 'About',
				docked: 'top'
			},
			{
				xtype: 'tabpanel',
				docked: 'top',
				items: [
					{
						title: 'Using the app',
						html: 'plz 2 search and browse'
					},
					{
						title: 'Teen Link',
						html: 'str8 thuggin'
					},
					{
						title: 'Credits',
						html: '<h2>You are awesome</h2><p>thnk u</p>'
					}	
				]
			}
			
		]



	}

});