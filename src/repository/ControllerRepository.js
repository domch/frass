
    /**
     * Private Functions
     * @type {{controllers: {}, load: Function, register: Function}}
     */
    function getControlllerName(pName){
        return './domain/{{name}}/ctrl'.replace('{{name}}', pName);
    }






    /**
     * Model
     * @type {{controllers: {}, load: Function, register: Function}}
     */
    var module =  
    {
        context: null,

    	controllers: {},

        init: function(pContext){
            this.context = pContext;
        },

        get: function(pName, pCallback)
        {
            if( !this.controllers[pName] )
            {
                requirejs([getControlllerName(pName)], function (pCtrl)
                {
                    if( !module.controllers[pName] ) {
                        module.controllers[pName] = pCtrl;
                        module.setContext(pCtrl);
                        module.initContext(pCtrl);
                    }

                    if( pCallback )
                        return pCallback();
                });
            }else
                return pCallback();
        },

        remoteload: function(pName, pCtrlResource, pCallback)
        {
            if( !this.controllers[pName] )
            {
                requirejs([pCtrlResource], function (pCtrl)
                {
                    module.controllers[pName] = pCtrl;
                    module.setContext(pCtrl);
                    module.initContext(pCtrl);

                    if( pCallback )
                        return pCallback(pCtrl);
                });
            }else
                return pCallback(this.controllers[pName]);
        },

        register: function(pName, pController)
        {
            this.controllers[pName] = pController;
        },

        setContext: function(pCtrl){
            pCtrl.$ = pCtrl.view.$ = window.frass;
        },

        initContext: function(pCtrl){
            pCtrl.context();
        }
    };




    export default module;