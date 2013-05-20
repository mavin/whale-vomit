Ext.define('WTTFT.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'homePanel',
		styleHtmlContent: true,
		layout: 'vbox',

		items: [
			{
				xtype: 'panel',
				cls: 'homeTitlePanel',
				html: [
					'<h1>WHERE<br />to TURN<br />for TEENS</h1>'
				],
				flex: 9
			},
			{
				xtype: 'panel',
				cls: 'homeDescription',
				html: [
					'<p>Where to Turn for Teens is a resource guide created specfically for ',
					'youth who are seeking personal empowerment with the support of others. ',
					'The agencies listed here can link youth to organizations that provide a variety of services.</p>'
				].join(""),
				flex: 7,
			},
		   	{
				xtype: 'button',
				text: 'Find Help',
				flex: 1,
				action: 'findhelp',
				cls: 'wttft-button orange'
			},
			{
				xtype: 'button',
				text: 'Call Teen Link',
				flex: 1,
				action: 'callteenlink',
				cls: 'wttft-button green'
			},
			{
				xtype: 'button',
				text: 'About',
				flex: 1,
				action: 'about',
				cls: 'wttft-button blue'
			}
		]



	}

});