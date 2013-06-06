Ext.define('WTTFT.view.TopicInfo', {
	extend: 'Ext.Container',
	xtype: 'topicinfo',

	config: {
		tpl: ['<h1>{name}</h1><div class = "quote"><p>{quote}</p></div><div class = "content"><p>{content}</p></div>'],
	    styleHtmlContent: true
	}

});