Ext.define('WTTFT.view.Resource', {
	extend: 'Ext.Panel',
	xtype: 'resource',

	config: {

		tpl: [
			'<h1>{name}</h1>',
			'<div class = "resourceInfo"><p>{info}</p></div>',
			'<dl>',
			'<dt><p>{phone}</p></dt><dd>Button?</dd>',
			'<dt><p>{website}</p></dt><dd>Button?</dd>',
			'</dl>'
		].join(""),
		styleHtmlContent: true,
		cls: 'resourcePanel'

	}

});