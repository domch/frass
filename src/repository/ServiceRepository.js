
    import dom from '../service/dom';
    import i18n from '../service/i18n';
    import rest from '../service/rest';
    import storage from '../service/storage';



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



    module.register("dom", dom);
    module.register("i18n", i18n);
    module.register("rest", rest);
    module.register("storage", storage);


    export default module;