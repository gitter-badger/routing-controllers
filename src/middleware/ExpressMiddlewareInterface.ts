import {ServerResponse, IncomingMessage} from "http";

/**
 * Classes that intercepts response result must implement this interface.
 */
export interface ExpressMiddlewareInterface {

    /**
     * Called before controller action is being executed.
     */
    use(request: IncomingMessage, response: ServerResponse, next: Function): void;

}