Ext.define('WTTFT.controller.Browse', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            browse: 'browse',
            list: 'browse list',
        },
        control: {
            '#browseSearch' : {  //  the id or itemId we gave our searchfield  
                scope: this,  
                clearicontap: this.onSearchClearIconTap,  
                keyup: this.onSearchKeyUp  
            },
            list : {
                itemtap: 'showResource'
            },
        }
    },

    showResource: function(list, index, element, record) {
        store = list.getStore();
        carItems = [];
        store.each(function(record){

            //using regex to delete all non-digits in the phone numbers, to allow for on tap calling
            //The raw phone number is still visible on the screen (it is not the same however, as when
            //you tap the phone number), in case an extension exists
            var regex = new RegExp(/[^0-9]/g);
            var phoneNum = record.get('phone');
            var sanitizedPhone = phoneNum.replace(regex, '');
            

            carItems.push({
                xtype: 'panel',
                cls: 'resourceContainer',
                html:   [
                            '<h1 class="carResource resource-agency-name">' + record.get('agencyName') + '</h1>',
                            '<p class="carResource resource-address1">Address: '+ record.get('address1') +'</p>',
                            '<p class="carResource resource-address2">' + record.get('address2') +'</p>',
                            '<p class="carResource resource-phone">Phone #: <a href="tel:'+sanitizedPhone+'">'+phoneNum+'</a>',
                            '<img class="carResourceHelp" src="../WTTFT/touch/resources/themes/images/default/pictos/help_black.png"></p>',
                            '<p class="carResource resource-service-website"><a href="'+record.get('serviceWebsite')+'">' + record.get('serviceWebsite') +'</a></p>',
                            '<p class="carResource resource-description">About:'+record.get('description') +'</p>'
                        ].join("")
            });

            //<h1 class="carResource resource-service-name">' + record.get('serviceName') + '</h1> \
            // <p class="carResource resource-agency-website">' + record.get('agencyWebsite') +'</p> \

        });
        this.getBrowse().push({
            xtype: 'flipview',
            items: carItems,
            activeItem: index,

            navigationBar: {
                items: [
                    {
                        text: 'text',
                        align: 'right'
                    }
                ]
            },
            listeners: [
                {
                    element: 'element',
                    delegate: '.carResourceHelp',
                    event: 'tap',
                    fn: function() {
                        console.log("the resource helper icon has been pressed");
                    }
                }
            ]
        });

    },

    // THIS IS ALL USELESS FOR THE MOMENT
    // Leaving it in for future use
    // onSearchKeyUp: function(field) {  
    //     console.log("searching now");
    //     //get the store and the value of the field  
    //     var value = field.getValue(),  
    //     store = this.getResourceStore();    //  getting the store that drives the contact list  
  
    //     //first clear any current filters on thes tore  
    //     store.clearFilter();  
  
    //     //check if a value is set first, as if it isnt we dont have to do anything  
    //     if (value) {  
    //         //the user could have entered spaces, so we must split them so we can loop through them all  
    //         var searches = value.split(' '),  
    //         regexps = [],  
    //         i;  
  
    //         //loop them all  
    //         for (i = 0; i < searches.length; i++) {  
    //             //if it is nothing, continue  
    //             if (!searches[i]) continue;  
  
    //             //if found, create a new regular expression which is case insenstive  
    //             regexps.push(new RegExp(searches[i], 'i'));  
    //         }  
  
    //         //now filter the store by passing a method  
    //         //the passed method will be called for each record in the store  
    //         store.filter(function(record) {  
    //             var matched = [];  

    //             //loop through each of the regular expressions  
    //             for (i = 0; i < regexps.length; i++) {  
    //                 var search = regexps[i],  
    //                 didMatch = record.get('agencyName').match(search) ||  
    //                             record.get('serviceName').match(search);  

    //                 //if it matched the first or last name, push it into the matches array  
    //                 matched.push(didMatch);  

    //             }  //if nothing was found, return false (dont so in the store)                 

    //             if (regexps.length > 1 && matched.indexOf(false) != -1) {  
    //                 return false;  
    //             } else {  
    //                 //else true true (show in the store)  
    //                 return matched[0];  
    //             }  
    //         });  
    //     }  
    // },  
  
    /** 
     * Called when the user taps on the clear icon in the search field. 
     * It simply removes the filter form the store 
     */  
    onSearchClearIconTap: function() {  
        //call the clearFilter method on the store instance  
        Ext.getCmp('resourceStore').getStore().clearFilter();  
    }  


});