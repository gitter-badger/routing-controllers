import {ServerResponse, ServerRequest} from "http";

/**
 * Classes that intercepts response result must implement this interface.
 */
export interface ErrorHandlerInterface {

    /**
     * Called before response.send is being called. The data passed to method is the data passed to .send method.
     * Note that you must return same (or changed) data and it will be passed to .send method.
     */
    handle(error: any, request: ServerRequest, response: ServerResponse, next: Function): void;

}