/**
 * A service
 *
 */
define(
[
],
function ()
{
    "use strict";


    var module =
    {
        save: function(pKey, pData){
            window.localStorage[pKey] = JSON.stringify(pData);
        },
        load: function(pKey){
            return JSON.parse(window.localStorage[pKey]);
        }
    }


    return module;
});