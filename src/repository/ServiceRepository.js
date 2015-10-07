/**
* This module is the responsible for creating services
*
*/
define(
[
    'common/service/dom',
    'common/service/i18n',
    'common/service/rest',
    'common/service/storage'
],
function (SrvDom, SrvI18N, SrvRest, SrvStorage)
{
    "use strict";


    var module =
    {
        services: {},

        get: function(pName)
        {
            return this.services[pName];
        },

        register: function(pName, pService)
        {
            this.services[pName]= pService;
        }
    };



    module.register("dom", SrvDom);
    module.register("i18n", SrvI18N);
    module.register("rest", SrvRest);
    module.register("storage", SrvStorage);


    return module;
}); 