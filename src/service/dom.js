
    import $ from 'jquery';


    var module =
    {
        selector: function (selector) {
            return $(selector);
        },
        /*attachEvent: function(pContainer, pEvent, pElement, pCallback){
            $(pContainer).on(pEvent, pElement, pCallback);
        },*/
        attachEvent: function(pContainer, pEvent, pCallback){
            $(pContainer).on(pEvent, pCallback);
        },
        addModifier: function(pContainer, pClass){
            $(pContainer).addClass(pClass);
        },
        removeModifier: function(pContainer, pClass){
            $(pContainer).removeClass(pClass);
        }
    };





    export default module;