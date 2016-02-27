/*!
 * File: core.js
 * Project: ProjectName
 * Author: FrontEndDevTeam
 * Updated: dd/mm/yyyy
 */

const core = (function ($, settings) {

    "use strict";

    return {

        // BOOTSTRAP MODULES
        bootstrap: function () {
            let m = this.modules,
                i;

            for (i in m) {

                if (document.querySelectorAll(m[i].selector).length) {
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

}(jQuery, coreSettings));
