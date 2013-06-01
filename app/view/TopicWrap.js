Ext.define('WTTFT.view.TopicWrap', {
	extend: 'Ext.Container',
	xtype: 'topicwrap',

	config: {
		// tpl: '<h1>{name}</h1><h2>{id}</h2>',
		// styleHtmlContent: true,
		navigationBar: false,
		layout: 'vbox',
		scrollable: true,
		items: [
			{
				xtype: 'topicbasic'
			},
			{
				xtype: 'topicbuttons'
			}
		]
	}	
});