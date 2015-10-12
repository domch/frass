/**
 * A service
 *
 */
define(
[
    '_libs/jquery/dist/jquery.min'
],
function (SelectorEngine)
{
    "use strict";


    var module =
    {
        selector: function (selector) {
            return SelectorEngine(selector);
        },
        /*attachEvent: function(pContainer, pEvent, pElement, pCallback){
            SelectorEngine(pContainer).on(pEvent, pElement, pCallback);
        },*/
        attachEvent: function(pContainer, pEvent, pCallback){
            SelectorEngine(pContainer).on(pEvent, pCallback);
        },
        addModifier: function(pContainer, pClass){
            SelectorEngine(pContainer).addClass(pClass);
        },
        removeModifier: function(pContainer, pClass){
            SelectorEngine(pContainer).removeClass(pClass);
        }
    }


    return module;
});