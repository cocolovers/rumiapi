import {BaseCommand} from '../BaseCommand';
import {services} from '../../services/services';
import {TagEnum} from '../../enums/TagEnum';
import {ICommandUserConnect} from '../../interfaces/dto/ICommandUserConnect';
import {MessageEnum} from '../../enums/MessageEnum';
import {ErrorMessageEnum} from '../../enums/ErrorMessageEnum';
import {IUserDto} from '../../dto/IUserDto';
import {serverUsers} from "../Users";

export class UserConnectCommand extends BaseCommand {

    registerAction() {
        this.socket.on(this.actionName, (user: ICommandUserConnect, response: any) => {
            services.log.info(TagEnum.UserConnectedCommand, `${MessageEnum.SOCKET_CONNECTED} - ${user.name} ${user.id}`);

            if (serverUsers.has(user.name)) {
                response(true, ErrorMessageEnum.USER_EXISTS);
                return;
            }

            serverUsers.set(user.name, new IUserDto(user.id, user.name, this.socket.id, this.socket));

            response(false, user);
        });
    }

}