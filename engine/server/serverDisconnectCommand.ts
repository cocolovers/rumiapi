import {IoCommandEnum} from '../../enums/IoCommandEnum';
import {serverUsers} from "../Users";
import {MessageEnum} from "../../enums/MessageEnum";
import {services} from "../../services/services";
import {TagEnum} from "../../enums/TagEnum";
import {Socket} from "socket.io";

export const serverDisconnectCommand = (socket: Socket) => (response: string) => {
    if (response === IoCommandEnum.SERVER_DISCONNECT) {
        try {
            Array.from(serverUsers.values()).map(user => ({id: user.socketId, username: user.name}))
                .filter(user => user.id == socket.id).forEach((user) => {
                services.log.info(TagEnum.ServerDisconnectCommand, `${MessageEnum.USER_DISCONNECTED} - ${user.username} ${user.id}`);
            });
            // eslint-disable-next-line no-empty
        } catch (ex: any) {
            services.log.info(TagEnum.ServerDisconnectCommand, ex.message);
        }
    }
}