

var crossroads = require('crossroads');


crossroads.addRoute('!', function () {
    location.hash = '';
});


/**
 * Private Functions
 * @param newHash
 * @param oldHash
 */
window.onhashchange = function(){
    crossroads.parse(location.hash.replace('#', ''));
};


var module =
{
    init: function(){
        crossroads.routed.add(console.log, console);
    },

    route: function(pRouteName){
        location.hash = pRouteName;
    },

    add: function(pName, pCallback){
        crossroads.addRoute(pName, pCallback);
    }
};


module.init();

module.exports = module;
