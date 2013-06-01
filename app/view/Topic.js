Ext.define('WTTFT.view.Topic', {
	extend: 'Ext.Container',
	xtype: 'topic',

	config: {
		// tpl: '<h1>{name}</h1><h2>{id}</h2>',
		// styleHtmlContent: true,
		navigationBar: false,
		layout: 'vbox',
		scrollable: {
			direction     : 'vertical',
			directionLock : true
		},
		items: [
			{
				xtype: 'topicinfo'
			},
			{
				xtype: 'button',
				text: 'Resources'
			}
		]
	}	
});