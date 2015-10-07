define(
[
    'config',
    'common/EventFactory',
    'common/ViewFactory',
    'common/RouteResolver',
    'common/Utils',
    'common/repository/ControllerRepository',
    'common/repository/ServiceRepository'
],
function (Config, EventFactory, ViewFactory, RouteResolver, Utils, ControllerRepository, ServiceRepository)
{
    "use strict";


    /**
     * @module common/ApplicationFactory
     */
    var module =
    {

    	init: function(pInitCall)
        {
            var rest = ServiceRepository.get("rest");

            ControllerRepository.init({
                Config: null,
                EventFactory: EventFactory,
                ViewFactory: ViewFactory,
                RouteResolver: RouteResolver,
                Utils: Utils,
                ControllerRepository: ControllerRepository,
                ServiceRepository: ServiceRepository
            });

            RouteResolver.route("!");
            EventFactory.broadcast(pInitCall);
        }
    }

    return module;
}); 