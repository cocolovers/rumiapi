import {IoCommandEnum} from "../models/enums/IoCommandEnum";
import {Server as IoServer, Socket} from "socket.io";
import {services} from "./services";
import {TagEnum} from "../models/enums/TagEnum";
import {MessageEnum} from "../models/enums/MessageEnum";
import {createServer, Server} from 'http';
import {ServerCommandRegister} from "./ServerCommandRegister";
import config from "../config.json";

export class AppServer {
    http: Server = createServer();
    io: IoServer = new IoServer(this.http, {
        cors: config.cors
    });

    constructor() {
        //@TODO This is incorrect, it should register connect to start every
        this.io.on(IoCommandEnum.CONNECTION, (socket: Socket) => {
            services.log.info(TagEnum.App, `${MessageEnum.SOCKET_CONNECTED} - ${socket.id} `);

            new ServerCommandRegister(socket);
        });
        this.http.listen(config.port, () => {
            services.log.info(TagEnum.App, `${MessageEnum.CONNECTED_AND_LISTENING_PORT} ${config.port}`);
        });

    }

}