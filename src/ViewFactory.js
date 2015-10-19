
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

        addLangFile: function(pLangFile){
            i18n.appendFile(pLangFile);
        }
    };


    export default module;