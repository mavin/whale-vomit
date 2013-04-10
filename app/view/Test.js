Ext.define('GS.view.Test', {
	extend: 'Ext.Panel',
	xtype: 'testpanel',

	config: {
		title: 'Test',
		iconCls: 'info',
		cls: 'info',
		scrollable: true,
		styleHtmlContent: true,
		items: [],
		dockedItems: [
			{
				dock: "top",
				html: "A docked item",
				style: "background-color: #fee"
			}
		],

        html: [
	        '<h1>This is a test page</h1>',
	        "<p>I am performing tests 'n stuff</p>",
	        '<h2>This is how we do iiittt</h2>'
   		 ].join("")



	}

});