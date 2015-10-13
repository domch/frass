
    import crossroads from './_libs/crossroads.js/dist/crossroads.min';



    /**
     * Private Functions
     * @param newHash
     * @param oldHash
     */
    //function parseHash(newHash, oldHash) {crossroads.parse(newHash);}
    window.onhashchange = function(){
        crossroads.parse(location.hash.replace('#', ''));
    };


    var module = {

        init: function()
        {
            crossroads.routed.add(console.log, console);
            crossroads.addRoute('!', function () {
                location.hash = '';
            });
        },

        route: function(pRouteName){
            location.hash = pRouteName;
        },

        add: function(pName, pCallback){
            crossroads.addRoute(pName, pCallback);
        }
    };


    module.init();


    export default module;