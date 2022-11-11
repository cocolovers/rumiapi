import {Socket} from "socket.io";
import {serverUsers} from "../models/const/Users";
import {MessageEnum} from "../models/enums/MessageEnum";
import {services} from "../services/services";
import {TagEnum} from "../models/enums/TagEnum";

export const KeepAliveListener = (socket: Socket) => () => {
    try {
        serverUsers.forEach((iuser, name) => {
            if (iuser.socketId == socket.id) {
                iuser.timestamp = Date.now();

                throw new Error(MessageEnum.SERVER_USER_FOUND);
            }
        });
        // eslint-disable-next-line no-empty
    } catch (ex: any) {
        services.log.info(TagEnum.ServerDisconnectCommand, ex.message);
    }
}