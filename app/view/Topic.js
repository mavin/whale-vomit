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
		cls: 'topicPanel',
		items: [
			{
				xtype: 'topicinfo'
			},
			{
				xtype: 'button',
				text: 'Find Resources',
				width: '60%',
				margin: '1.5em 20%', //positions the button properly on the page
				ui: 'action'
			}
		],

        navigationBar: {
            items: [
                {
                    text: 'topic',
                    align: 'right'
                }
            ]
        }
	}	
});