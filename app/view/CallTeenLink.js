Ext.define('WTTFT.view.CallTeenLink', {
	extend: 'Ext.Panel',
	xtype: 'callteenlinkpanel',

	config: {
		title: 'Call Teen Link',
		iconCls: 'phone1',
		cls: 'callTeenLink',
		styleHtmlContent: true,
		layout: 'fit',
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Call Teen Link',
				ui: 'callTeenLink'
			},
			{
				layout: 'vbox',
				styleHtmlContent: true,
				cls: 'callPanel',
				items: [
					{
						html: [
							'<h1>Talk it Out</h1>',
							'<p class="callText">Talk it out is our tagline and mantra. It’s the message that just by talking ',
							'about it things can get better. Sure calling Teen Link doesn’t mean your problems ',
							'magically disappear, but expressing how you’re feeling and what you’re going through ',
							'is a good first step.</p>'
							].join(""),
						flex: 3
					},
					{
						xtype: 'button',
						text: 'Call Now',
						margin: '15% 15% 15% 15%', //positions the button properly on the page
						height: '20%',
						width: '70%',
						ui: 'confirm',
			            handler:function(){
			              document.location.href = 'tel:+8668336546'
			            }
					},
				]
			}
		],
		listeners: {
			//On show event, changes the color theme to green and unhides the tab bar.
			show: function() {
				var tabBar = Ext.getCmp('main').getTabBar();
				tabBar.setUi('callTabBar');
				tabBar.show();

			}
		}



	}

});