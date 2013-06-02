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
				title: 'About',
				ui: 'aboutTeenLink'
			},
			{
				xtype: 'tabpanel',
				ui: 'aboutTabBar',
				
				items: [
					{
						title: 'The App',
						styleHtmlContent: true,
						html: [
							'<h1>The WTTFT App</h1>',
							'<p class="about">The two ways to look up information in the WTTFT app are through the ',
							'Search feature (found on the homepage or icon tab) or by browsing the topics ',
							'listed. With search you can use a term or a specific agency.</p>'
							].join(""),
						cls: 'aboutPanel'
					},
					{
						title: 'Teen Link',
						styleHtmlContent: true,
						html: [
							'<h1>Teen Link</h1>',
							'<p class="about">Teen Link is a confidential, anonymous, and non-judgemental ',
							'telephone help line answered by teens each evening from 6-10 pm. ',
							'Teen volunteers are trained to listen to your concerns and to talk with ',
							'you about whatever is on your mind. No issue is too big or too small. ',
							'Phone workers also have access to an extensive database and can give you ',
							'information on agencies serving youth in the King County area.</p>'
							].join(""),
						cls: 'aboutPanel'
					},
					{
						title: 'Volunteering',
						styleHtmlContent: true,
						html: [
							'<h1>Volunteering</h1>',
							'<p class="about">Volunteering with Teen Link is a great way to develop leadership skills, ',
							'learn about community resources and get connected with other youth. For more ',
							'in-depth information about volunteer requirements, call <a href="tel:+8668336546">1-(866)TEENLINK</a> between ',
							'6-10 pm or check out <a href="http://866teenlink.org/">our website</a>.</p>'
							].join(""),
						cls: 'aboutPanel'
					}//,
					//  ***** I removed the "credits" page due to the icons being different sizes, 
					//and me just sticking with the pictos instead of bothering with resizing everything 
					//(I tried, it just was not panning out properly)  *********
					
					// {
					// 	title: 'Credits',
					// 	styleHtmlContent: true,
					// 	html: [
					// 		'<h1>Credits</h1>',
					// 		'<p class="about">Icon credits go to <a href="http://thenounproject.com/tlb" target="_blank">Thomas Le Bas</a> ',
					// 		'and <a href="http://thenounproject.com/joe_harrison" target="_blank">Joe Harrison</a> ',
					// 		'from the Noun Project.</p>'
					// 		].join(""),
					// 	cls: 'aboutPanel'
					// }
				],
				flex: 1
			}
		],
		listeners: {
			//On show event, unhides the TabBar
			show: function() {
				var tabBar = Ext.getCmp('main').getTabBar();
				tabBar.setUi('aboutTabBar');
				tabBar.show();
			}
		}

	}

});