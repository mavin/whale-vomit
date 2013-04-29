Ext.define('WTTFT.view.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'carousel',

    config: {

        items: [
            {
                xtype: 'panel',
                html: 'hello1'
            },
            {
                xtype: 'panel',
                html: 'hello2'
            },
            {
                xtype: 'panel',
                html: 'hello3'
            }
        ]
    }

 });