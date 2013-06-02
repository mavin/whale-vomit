Ext.define('WTTFT.view.About', {
	extend: 'Ext.Panel',
	xtype: 'aboutpanel',

	config: {
		title: 'About',
		iconCls: 'info',
		cls: 'info',
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
						scrollable: true,
						html: '<p>The two ways to look up information in the WTTFT app are through the Search or by browsing the topics listed. With search you can use a term or a specific agency.</p>'
					},
					{
						title: 'Teen Link',
						scrollable: true,
						html: ['<img src = "/WTTFT/resources/images/teenlink_logo.png" style = "float:left;"/>',
							'<p>Teen Link is a confidential, annoymus and non-judgemental telepone help line answered by teens each evening from 6-10 pm. Teen volunteers are trained to listen to your concerns and to talk with you about whatever is on your mind. No issue is too big or too small. Phone workers also have access to an extensive databse and can give you information on agencies serving youth the the King County area.</p>'
						].join("")
					},
					{
						title: 'Volunteering',
						scrollable: true,
						html: ['<p>Volunteering with Teen Link is a great way to develop leadership skills, learn about community resources and get connected with other youth. For more in-depth information about colunter requirements, call 1(866)TEENLINK between 6-10 pm or check out our website.</p>',
							'<h3>Outreach Worker</h3>',
							'<dl>',
							'	<dt>School & Community Liaison</dt>',
							'	<dd>Represent Teen Link in your school and community.</dd>',
							'	<dt>Youth Suicide Speakers Bureau Teen Educator</dt>',
							'	<dd>Be paired with an adult trainer to give Youth Suicide Prevention Presentations (YSPPs) at schools and youth-serving community agencies throughout King County.</dd>',
							'</dl>',
							'<h3>Phone Worker</h3>',
							'<p>Provide emotional support and referrals to other teens who call the Teen Link help line.</p>',
							'<h3>Peer Advisory Board Member</h3>',
							'<p>Be part of planning Teen Link’s future by helping to ensure that the Teen Link program remains youth-driven and attentive to the needs of young people.</p>'
						].join("")
					}	
				]
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