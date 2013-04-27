Ext.define('WTTFT.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main'
        },
        control: {
            'button[action=findhelp]' : {
                tap: function() {
                    this.getMain().setActiveItem(1);
                },
            },
            'button[action=callteenlink]' : {
                tap: function() {
                    this.getMain().setActiveItem(2);
                }
            },
            'button[action=about]' : {
                tap: function() {
                    this.getMain().setActiveItem(3);
                }
            }
        }
    }
});