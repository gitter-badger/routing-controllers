import {getContainer} from "../index";
import {MiddlewareMetadataArgs} from "./args/MiddlewareMetadataArgs";
import {ExpressMiddlewareInterface} from "../middleware/ExpressMiddlewareInterface";
import {KoaMiddlewareInterface} from "../middleware/KoaMiddlewareInterface";
import {ExpressErrorHandlerMiddlewareInterface} from "../middleware/ExpressErrorHandlerMiddlewareInterface";

export class MiddlewareMetadata {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    /**
     * Indicates if this middleware is global, thous applied to all routes.
     */
    isGlobal: boolean;

    /**
     * Object class of the middleware class.
     */
    target: Function;

    /**
     * Execution priority of the middleware.
     */
    priority: number;
    
    /**
     * Indicates if middleware must be executed after routing action is executed.
     */
    afterAction: boolean;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    
    constructor(args: MiddlewareMetadataArgs) {
        this.isGlobal = args.isGlobal;
        this.target = args.target;
        this.priority = args.priority;
        this.afterAction = args.afterAction;
    }

    // -------------------------------------------------------------------------
    // Accessors
    // -------------------------------------------------------------------------

    get expressInstance(): ExpressMiddlewareInterface {
        return getContainer().get<ExpressMiddlewareInterface>(this.target);
    }

    get expressErrorHandlerInstance(): ExpressErrorHandlerMiddlewareInterface {
        return getContainer().get<ExpressErrorHandlerMiddlewareInterface>(this.target);
    }

    get koaInstance(): KoaMiddlewareInterface {
        return getContainer().get<KoaMiddlewareInterface>(this.target);
    }
    
}