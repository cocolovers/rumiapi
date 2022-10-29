import {services} from '../../services/services';
import {TagEnum} from '../../enums/TagEnum';
import {ICommandUserConnect} from '../../interfaces/dto/ICommandUserConnect';
import {MessageEnum} from '../../enums/MessageEnum';
import {ErrorMessageEnum} from '../../enums/ErrorMessageEnum';
import {IUserDto} from '../../dto/IUserDto';
import {serverUsers} from "../Users";
import {Socket} from "socket.io";

export const userConnectCommand = (socket: Socket) => (user: ICommandUserConnect, response: any) => {
    services.log.info(TagEnum.UserConnectedCommand, `${MessageEnum.USER_CONNECTED} - ${user.name} ${user.id}`);

    if (serverUsers.has(user.name)) {
        response(true, ErrorMessageEnum.USER_EXISTS);
        return;
    }

    serverUsers.set(user.name, new IUserDto(user.id, user.name, socket.id, socket));
    response(false, user);
}