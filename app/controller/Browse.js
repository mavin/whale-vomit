Ext.define("'WTTFT.controller.Browse'", {
    extend: "Ext.app.Controller",
        config: {
            refs: {   
                browse: "browse", 
                carouselView: "carousel"         
             },
            control: {
                browse: { 
                        carouselCommand: "onCarouselCommand"
                     }
             }
        },

        // Transitions
        slideLeftTransition: { type: 'slide', direction: 'left' },
        slideRightTransition: { type: 'slide', direction: 'right' },


         onCarouselCommand: function (list, record, target, index, e, eOpts) {  
             console.log("onCarouselCommand");
             var a = this.getCarouselView().setActiveItem(index); // setting the carousel item according to list index.
             Ext.Viewport.animateActiveItem(a, this.slideLeftTransition);
        },
         // Base Class functions.
        launch: function () {
            this.callParent(arguments);
            console.log("launch");

        },
        init: function () {
            this.callParent(arguments);
            console.log("init");
        }
});