/*!
 * File: core.js
 * Project: ProjectName
 * Author: FrontEndDevTeam
 * Updated: dd/mm/yyyy 
 */

var core = (function ($, window, document) {

    return {

        // HELPERS
        helper: {
            winWidth: function() {
                return $(window).width();
            },

            winHeight: function() {
                return $(window).height();
            }
        },

        // BOOTSTRAP MODULES
        bootstrap: function(options) {
            var m = this.modules,
                i;
                        
            for (i in m) {
                
                var $el   = $(m[i].selector),
                    check = $el.length;
                
                if(check) {
                    m[i].init(options);
                }
            }
        },

        // MODULES
        modules: {
            
            // Module Example
            /*
            customModule: {
                selector: '.class',
                init: function(options) {
                    
                    var $this = $(this.selector);

                    $this.pluginName();
                    
                }
            }
            */
        }
    };

})(jQuery, window, document);
