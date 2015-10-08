

var Ractive = require('ractive');



/**
 * This module is the responsible for creating template views
 * @module common/ViewFactory
 * @type {{create: Function}}
 */
var module =
{
    init: function(){
        ServiceRepository = require('./repository/ServiceRepository.js');
        Ractive.defaults.data.i18n = ServiceRepository.get("i18n");;
    },

    /**
     * @param pContainer
     * @param pTemplateSource
     * @param pData
     * @param pCallback
     */
    create: function(pContainer, pTemplateSource, pData, pCallback)
    {
        require(['_libs/requirejs-text/text!domain/' + pTemplateSource],
            function (pTemplate) {
                module.createByText(pContainer, pTemplate, pData, pCallback);
            }
        );
    },

    createByLoading: function(pContainer, pTemplateSource, pData, pCallback){
        $.ajax({url: pTemplateSource}).done(function(pTemplate){
            module.createByText(pContainer, pTemplate, pData, pCallback);
        });
    },

    createByText: function(pContainer, pTemplate, pData, pCallback)
    {
        var ractive =
            new Ractive({
                el: pContainer,
                template: pTemplate,
                data: pData ? pData : {},
                lazy: true
            });

        pCallback(ractive);
    },

    loadIntFile: function(pIntFile){
        i18n.appendFile(pIntFile);
    }
};

module.exports = module;