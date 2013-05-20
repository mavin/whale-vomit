Ext.define('WTTFT.view.About', {
	extend: 'Ext.Panel',
	xtype: 'aboutpanel',

	config: {
		title: 'About',
		iconCls: 'info',
		cls: 'info',
		scrollable: true,
		styleHtmlContent: true,
		layout: 'fit',
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'About'
			},
			{
				xtype: 'tabpanel',
				items: [
					{
						title: 'The App',
						html: '<p>The two ways to look up information in the WTTFT app are through the Search or by browsing the topics listed. \
								With search you can use a term or a specific agency.</p>'
					},
					{
						title: 'Teen Link',
						html: '<p>Teen Link is a confidential, anonymous, and non-judgemental telephone help line answered by teens each evening from 6-10 pm. Teen volunteers are trained to listen to your concerns and to talk with you about whatever is on your mind. No issue is too big or too small. Phone workers also have access to an extensive database and can give you information on agencies serving youth in the King County area.</p>'
					},
					{
						title: 'Volunteering',
						html: '<p>Volunteering with Teen Link is a great way to develop leadership skills, learn about community resources and get connected with other youth. For more in-depth information about colunter requirements, call 1(866)TEENLINK between 6-10 pm or check out our website.</p>'
					},
					{
						title: 'Credits',
						html: '<p>Icon credits go to <a href="http://thenounproject.com/tlb" target="_blank">Thomas Le Bas</a> and <a href="http://thenounproject.com/joe_harrison" target="_blank">Joe Harrison</a>  from the Noun Project.</p>'
					}	
				],
				flex: 1
			}
			
		],
		listeners: {
			//On show event, unhides the TabBar
			show: function() {
				Ext.getCmp('main').getTabBar().show();
			}
		}

	}

});