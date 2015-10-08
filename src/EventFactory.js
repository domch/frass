
var radio = require('radio'),
    ControllerRepository = require('./repository/ControllerRepository.js');


/** Privates */
function extractControllerName(pTopic){
    return pTopic.split('.')[1];
}




/**
 * This module is the responsible for managing events
 */
var module =
{
    subscribe: function(pTopic, pObserver){
        radio(pTopic).subscribe(pObserver);
    },

    broadcast: function (pTopic){
        var args = Array.prototype.slice.call(arguments);
        args.shift();

        if( pTopic[0] === "*" ){
            radio(pTopic).broadcast.apply(radio(pTopic), args);
        }
        else {
            ControllerRepository.get(extractControllerName(pTopic), function () {
                radio(pTopic).broadcast.apply(radio(pTopic), args);
            });
        }
    }
}


module.exports = module;
