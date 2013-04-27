Ext.define('WTTFT.view.CallTeenLink', {
	extend: 'Ext.Panel',
	xtype: 'callteenlinkpanel',

	config: {
		title: 'Call Teen Link',
		iconCls: 'info',
		cls: 'callteenlink',
		styleHtmlContent: true,
		layout: 'fit',
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Call Teen Link'
			},
			{
				layout: 'vbox',
				items: [
					{
						html: '<p>You can call Teen Link and talk about stuff or whatever. They\'re pretty cool.</p>',
						flex: 5
					},	
					{
						xtype: 'button',
						text: 'Call Now',
						ui: 'confirm',
						flex: 1
					}
				]
			}
			
		]



	}

});