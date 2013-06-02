Ext.define('WTTFT.view.Resource', {
	extend: 'Ext.Panel',
	xtype: 'resource',

	config: {

		tpl: '<h1>{name}</h1><p>{phone}</p><p>{website}</p>',
		styleHtmlContent: true,

		// BELOW IS OLD CODE FROM VIEW/ABOUT.JS
		// title: 'About',
		// iconCls: 'info',
		// cls: 'info',
		// scrollable: true,
		// styleHtmlContent: true,
		// layout: 'fit',
		// items: [
		// 	{
		// 		xtype: 'titlebar',
		// 		docked: 'top',
		// 		title: 'Resource'
		// 	},
		// 	{
		// 		xtype: 'tabpanel',
		// 		items: [
		// 			{
		// 				title: 'Using the app',
		// 				html: '<p>The two ways to look up information in the WTTFT app are through the Search or by browsing the topics listed. With search you can use a term or a specific agency.</p>'
		// 			},
		// 			{
		// 				title: 'Teen Link',
		// 				html: '<p>Teen Link is a confidential, annoymus and non-judgemental telepone help line answered by teens each evening from 6-10 pm. Teen volunteers are trained to listen to your concerns and to talk with you about whatever is on your mind. No issue is too big or too small. Phone workers also have access to an extensive databse and can give you information on agencies serving youth the the King County area.</p>'
		// 			},
		// 			{
		// 				title: 'Volunteering',
		// 				html: '<p>Volunteering with Teen Link is a great way to develop leadership skills, learn about community resources and get connected with other youth. For more in-depth information about colunter requirements, call 1(866)TEENLINK between 6-10 pm or check out our website.</p>'
		// 			}	
		// 		]
		// 	}
			
		// ],
		// listeners: {
		// 	//On show event, unhides the TabBar
		// 	show: function() {
		// 		Ext.getCmp('main').getTabBar().show();
		// 	}
		// }

	}

});