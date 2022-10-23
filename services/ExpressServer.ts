import express from 'express';
import * as core from 'express-serve-static-core';
import cors from "cors";

export class ExpressServer {
    app: core.Express = express();

    createServer(): core.Express {
        this.app.use(cors());

        return this.app;
    }
}