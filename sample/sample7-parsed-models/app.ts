import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import {useExpressServer} from "../../src/index";

require("./UserController");

let app = express(); // create express server
app.use(bodyParser.json()); // setup body parser
useExpressServer(app); // register controllers routes in our express application
app.listen(3001); // run express app

console.log("Express server is running on port 3001. Open http://localhost:3001/users/");