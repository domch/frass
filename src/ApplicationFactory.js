define(
[
    'EventFactory',
    'ViewFactory',
    'RouteResolver',
    'Utils',
    'repository/ControllerRepository',
    'repository/ServiceRepository'
],
function (EventFactory, ViewFactory, RouteResolver, Utils, ControllerRepository, ServiceRepository)
{
    "use strict";


    /**
     * @module common/ApplicationFactory
     */
    var module =
    {

    	init: function(pInitCall, pConfig)
        {
            var rest = ServiceRepository.get("rest");

            ControllerRepository.init({
                Config: pConfig,
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