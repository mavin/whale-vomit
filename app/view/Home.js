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
				xtype: 'image',
				src: '/WTTFT/resources/images/whale200.png',
				height: 200,
				width: 200,
				top: 20,
				left: 0,
				zIndex: 0
			},
			{
				xtype: 'panel',
				cls: 'homeTitlePanel',
				flex: 11,
				html: [
					'<h1>WHERE<br />to TURN<br />for TEENS</h1>'
				]
			},
			{
				xtype: 'panel',
				cls: 'homeDescription',
				flex: 8,
				html: [
					'<p>Where to Turn for Teens is a resource guide created specfically for ',
					'youth who are seeking personal empowerment with the support of others. ',
					'The agencies listed here can link youth to organizations that provide a variety of services.</p>'
				].join("")
			},
		   	{
				xtype: 'button',
				text: 'Find Help',
				action: 'findhelp',
				flex: 1,
				cls: 'wttft-button-orange'
			},
			{
				xtype: 'button',
				text: 'Call Teen Link',
				action: 'callteenlink',
				flex: 1,
				cls: 'wttft-button-green'
			},
			{
				xtype: 'button',
				text: 'About',
				action: 'about',
				flex: 1,
				cls: 'wttft-button-blue'
			}
		]



	}

});