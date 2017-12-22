import * as Express from "express";

class App {
    public express: Express.Application;

    constructor() {
        this.express = Express();
    }
}

export default new App().express;