

    import Utils from './Utils';
    import ControllerRepository from './repository/ControllerRepository';
    import ServiceRepository from './repository/ServiceRepository';
    import EventFactory from './EventFactory';
    import ViewFactory from './ViewFactory';
    import RouteResolver from './RouteResolver';


    window.frass =
    {
        EventFactory: EventFactory,
        ViewFactory: ViewFactory,
        RouteResolver: RouteResolver,
        Utils: Utils,
        ControllerRepository: ControllerRepository,
        ServiceRepository: ServiceRepository
    }


    export default module;
