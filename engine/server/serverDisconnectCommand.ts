import {IoCommandEnum} from '../../enums/IoCommandEnum';
import {serverUsers} from "../Users";
import {MessageEnum} from "../../enums/MessageEnum";
import {services} from "../../services/services";
import {TagEnum} from "../../enums/TagEnum";
import {Socket} from "socket.io";

export const serverDisconnectCommand = (socket: Socket) => (response: string) => {
    if (response === IoCommandEnum.SERVER_DISCONNECT) {
        try {
            serverUsers.forEach((iuser, name) => {
                if (iuser.socketId == socket.id) {
                    // serverUsers.delete(name);
                    // throw new Error(MessageEnum.SERVER_USER_FOUND);
                    services.log.info(TagEnum.ServerDisconnectCommand, `${MessageEnum.USER_DISCONNECTED} - ${iuser.name} ${socket.id}`);
                }
            });
            // eslint-disable-next-line no-empty
        } catch (ex: any) {
            services.log.info(TagEnum.ServerDisconnectCommand, ex.message);
        }
    }
}