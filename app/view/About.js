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
				title: 'About',
				ui: 'aboutTeenLink',
			},
			{
				xtype: 'tabpanel',
				id: 'aboutToolBar',
				ui: 'aboutTabBar',
				items: [
					{
						title: 'Using the App',
						cls: 'aboutPanel',
						styleHtmlContent: true,
						scrollable: true,
						html: [
							'<div class="about">',
							'<h1>Where To Turn For Teens</h1>',
							'<h2>The Mobile Application</h2>',
							'<ol>',
							'<li>Find a topic to learn about</li>',
							'<li>Find a resource who can help you</li>',
							'<li>Connect with them over the phone, online, or in person</li>',
							'</ol>',
							'</div>'
							].join("")
					},
					{
						title: 'Teen Link',
						cls: 'aboutPanel',
						scrollable: true,
						styleHtmlContent: true,
						html: ['<img class="teenLinkLogo" src="/WTTFT/resources/images/teenlink_logo.png"/>',
							'<div class="about aboutDescription ">',
							'<p>Teen Link is a confidential, anonymous, and non-judgemental ',
							'telephone help line answered by teens each evening from 6-10 pm. ',
							'Teen volunteers are trained to listen to your concerns and to talk with ',
							'you about whatever is on your mind. No issue is too big or too small. ',
							'Phone workers also have access to an extensive database and can give you ',
							'information on agencies serving youth in the King County area.</p>',
							'</div>'
							].join("")
					},
					{
						title: 'Volunteering',
						cls: 'aboutPanel',
						scrollable: true,
						styleHtmlContent: true,
						html: [
							'<div class="about">',
							'<h1>Volunteer Positions</h1>',
							'<p>Volunteering with Teen Link is a great way to develop leadership skills,',
							' learn about community resources and get connected with other youth. ',
							'For more in-depth information about volunteer requirements, please call <a href="tel:+18668336546">1-(866)TEENLINK</a>',
							' between 6-10 pm or <a href="http://www.866teenlink.org/">check out our website</a>.</p>',
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
							'<p>Be part of planning Teen Link’s future by helping to ensure that the Teen Link program remains youth-driven and attentive to the needs of young people.</p>',
							'</div>'
						].join("")
					}	
				]
			}
			
		],
		listeners: {
			//On show event, unhides the TabBar
			show: function() {
				//sets the active item in the toolbar to "The App" upon button tap 
				Ext.getCmp('aboutToolBar').setActiveItem(0);

				//changes the theme to the baby blue upon showing
				var tabBar = Ext.getCmp('main').getTabBar();
				tabBar.setUi('aboutTabBar');
				tabBar.show();
			}
		}

	}

});