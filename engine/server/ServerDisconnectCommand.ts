import {BaseCommand} from '../BaseCommand';
import {IoCommandEnum} from '../../enums/IoCommandEnum';
import {serverUsers} from "../Users";
import {MessageEnum} from "../../enums/MessageEnum";
import {services} from "../../services/services";
import {TagEnum} from "../../enums/TagEnum";

export class ServerDisconnectCommand extends BaseCommand {

    registerAction() {
        this.socket.on(IoCommandEnum.DISCONNECT, (reason: string) => {
            if (reason === IoCommandEnum.SERVER_DISCONNECT) {
                try {
                    serverUsers.forEach((iuser, name) => {
                        if (iuser.socketId == this.socket.id) {
                            serverUsers.delete(name);
                            throw new Error(MessageEnum.SERVER_USER_FOUND);
                        }
                    });
                    // eslint-disable-next-line no-empty
                } catch (ex: any) {
                    services.log.info(TagEnum.ServerDisconnectCommand, ex.message);
                }
            }
        });
    }
}