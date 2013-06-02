Ext.define('WTTFT.view.TopicInfo', {
	extend: 'Ext.Container',
	xtype: 'topicinfo',

	config: {
		tpl: ['<h1>{name}</h1><p>{quote}</p><p>{content}</p>'],
	    styleHtmlContent: true
	}

});