/*!
 * File: core.js
 * Project: ProjectName
 * Author: FrontEndDevTeam
 * Updated: dd/mm/yyyy 
 */

var core = (function ($,settings) {
    
    "use strict";
    
    var s = settings || {};

    return {

        // BOOTSTRAP MODULES
        bootstrap: function() {
            var m = this.modules,
                i;
                        
            for ( i in m ) {
                
                var e = document.querySelectorAll(m[i].selector).length;
                
                if(e) {
                    m[i].init(settings);
                }
            }
        },

        // MODULES
        modules: {
            
            // Module Example
            /*
            customModule: {
                selector: '.js-classname',
                init: function(settings) {
                    
                    var $this = $(this.selector);

                    $this.pluginName();
                    
                }
            }
            */
        }
    };

})(jQuery,coreSettings);
