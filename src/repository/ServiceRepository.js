
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



module.register("dom", require('../service/dom.js'));
module.register("i18n", require('../service/i18n.js'));
module.register("rest", require('../service/rest.js'));
module.register("storage", require('../service/storage.js'));


module.exports = module;