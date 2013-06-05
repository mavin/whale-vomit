Ext.define('WTTFT.view.Resource', {
	extend: 'Ext.Panel',
	xtype: 'resource',

	config: {

		tpl: '<h1>{name}</h1><p>{phone}</p><p>{website}</p>',
		styleHtmlContent: true

	}

});