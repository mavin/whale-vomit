Ext.define('WTTFT.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		styleHtmlContent: true,
		layout: 'vbox',

		items: [
			{
				xtype: 'panel',
		        html: [
			        '<img src="/WTTFT/resources/images/monster_arrowthing.png" />',
			        '<h1>Where To Turn For Teens</h1>',
			        "<p>There is help out there for you. Use this app to find it.</p>"
		   		].join(""),
		   		flex: 12
			},
			{
				xtype: 'button',
				text: 'Find Help',
				flex: 1,
				action: 'findhelp'
			},
			{
				xtype: 'button',
				text: 'Call Teen Link',
				flex: 1,
				action: 'callteenlink'
			},
			{
				xtype: 'button',
				text: 'About',
				flex: 1,
				action: 'about'
			}
		]



	}

});