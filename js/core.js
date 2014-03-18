/*!
 * File: core.js
 * Project: ProjectName
 * Author: FrontEndDevTeam
 * Updated: dd/mm/yyyy 
 */

var core = (function ($) {
    
    "use strict";

    return {

        // BOOTSTRAP MODULES
        bootstrap: function(settings) {
            var m = this.modules,
                i;
                        
            for ( i in m ) {
                
                var $el   = $(m[i].selector),
                    check = $el.length;
                
                if(check) {
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

})(jQuery);
