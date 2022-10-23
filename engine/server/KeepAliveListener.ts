import {BaseCommand} from "../BaseCommand";
import {Socket} from "socket.io";
import {serverUsers} from "../Users";
import {MessageEnum} from "../../enums/MessageEnum";
import {services} from "../../services/services";
import {TagEnum} from "../../enums/TagEnum";

export class KeepAliveListener extends BaseCommand {

    registerAction() {
        let totest = "";
        this.socket.onAny((socket: Socket) => {
            try {
                serverUsers.forEach((iuser, name) => {
                    if (iuser.socketId == this.socket.id) {
                        iuser.timestamp = Date.now();

                        totest = iuser.name;
                        console.log("Actualizado el objeto con la fecha? (Desde):");
                        console.log(iuser);

                        throw new Error(MessageEnum.SERVER_USER_FOUND);
                    }
                });
                // eslint-disable-next-line no-empty
            } catch (ex: any) {
                services.log.info(TagEnum.ServerDisconnectCommand, ex.message);
            }

            if (serverUsers.has(totest)) {
                console.log("Actualizado el objeto con la fecha? (Hasta):");
                console.log(serverUsers.get(totest));
            }

        });
    }
}