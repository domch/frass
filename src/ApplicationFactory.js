/**
 * Created by axmdo01 on 08.10.2015.
 */

var Utils = require('./Utils.js'),

    EventFactory = require('./EventFactory.js'),
    ViewFactory = require('./ViewFactory.js'),
    RouteResolver = require('./RouteResolver.js'),
    ControllerRepository = require('./repository/ControllerRepository.js'),
    ServiceRepository = require('./repository/ServiceRepository.js');


var module =
{

    init: function(pInitCall, pConfig, pLang)
    {
        ControllerRepository.init({
            Config: pConfig,
            Utils: Utils,
            EventFactory: EventFactory,
            ViewFactory: ViewFactory,
            RouteResolver: RouteResolver,
            ControllerRepository: ControllerRepository,
            ServiceRepository: ServiceRepository
        });

        RouteResolver.route("!");
        EventFactory.broadcast(pInitCall);
    }
};


module.exports = module;