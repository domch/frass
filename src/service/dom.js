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

     ;

    var module =
    {
        selector: function (selector) {
            return $(selector);
        },
        attachEvent: function(pContainer, pEvent, pElement, pCallback){
            $(pContainer).on(pEvent, pElement, pCallback);
        },
        addModifier: function(pContainer, pClass){
            $(pContainer).addClass(pClass);
        },
        removeModifier: function(pContainer, pClass){
            $(pContainer).removeClass(pClass);
        }
    }


    return module;
});