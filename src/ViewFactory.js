
import Ractive from 'ractive';
import $ from 'jquery';
import ServiceRepository from './repository/ServiceRepository';



/**
 * Services which we need
 */
var i18n = ServiceRepository.get("i18n");


/**
 * All instances of template engine has this function as default.
 */
Ractive.defaults.data.i18n = i18n;



/**
 * This module is the responsible for creating template views
 * @module common/ViewFactory
 * @type {{create: Function}}
 */
var module =
{

    /**
     * @param pContainer
     * @param pTemplateSource
     * @param pData
     * @param pCallback
     */

    create: function(pContainer, pTemplateSource, pData, pCallback)
    {
        $.get( "domain/" + pTemplateSource, function( pTemplate ) {
            module.createByText(pContainer, pTemplate, pData, pCallback);
        });
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


    createByUsingPartials: function(pContainer, pTemplateSource, pPartialSources, pData, pCallback){

        function readPartialFiles(filenames) {
            // N.B. passing readJSON as a function, not calling it with `()`
            return Promise.all(filenames.map(readFile));
        }

        var partialSources = [];
        Object.keys(pPartialSources).forEach(function(key) {
            partialSources.push(pPartialSources[key]);
        });

        readPartialFiles(pPartialSources).done(function (pResult) {
            // results is an array of the values stored in a.json and b.json

            $.ajax({url: pTemplateSource}).done(function(pTemplate){
                pResult.forEach(function(pPartial){
                    Object.keys(pPartialSources).forEach(function(key) {
                        pPartialSources[key] = pPartial;
                    });
                }).then(function () {
                    module.createByTextUsingPartials(pContainer, pTemplate, pPartialSources, pData, pCallback);
                });
            });

        }, function (err) {
            // If any of the files fails to be read, err is the first error
        });

    },


    createByTextUsingPartials: function(pContainer, pTemplate, pPartialTemplates, pData, pCallback)
    {
        var ractive =
            new Ractive({
                el: pContainer,
                template: pTemplate,
                data: pData ? pData : {},
                partials: pPartialTemplates,
                lazy: true
            });

        pCallback(ractive);
    },



    addLangFile: function(pLangFile){
        i18n.appendFile(pLangFile);
    }
};


export default module;

