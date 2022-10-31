import {services} from '../../services/services';
import {TagEnum} from '../../enums/TagEnum';
import {ICommandUserConnect} from '../../interfaces/dto/ICommandUserConnect';
import {MessageEnum} from '../../enums/MessageEnum';
import {UserDto} from '../../dto/UserDto';
import {serverUsers} from "../Users";
import {Socket} from "socket.io";
import {ErrorMessageEnum} from "../../enums/ErrorMessageEnum";

export const userConnectCommand = (socket: Socket) => (user: ICommandUserConnect, response: any) => {
    services.log.info(TagEnum.UserConnectedCommand, `${MessageEnum.USER_CONNECTED} - ${user.name} ${user.id}`);

    if (serverUsers.has(user.name) && serverUsers.get(user.name)?.id == socket.id) {
        return;
    }

    if (serverUsers.has(user.name)) {
        //@TODO implement error layer
        response(false, ErrorMessageEnum.USER_EXISTS);
    }

    serverUsers.set(user.name, new UserDto(user.id, user.name, socket.id, socket));
    response(true, user);
}