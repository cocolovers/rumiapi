import {Socket} from 'socket.io';
import {KeepAliveListener} from '../commands/keepAliveListener';
import {IoCommandEnum} from '../models/enums/IoCommandEnum';
import {userConnectCommand} from "../commands/userConnectCommand";
import {serverDisconnectCommand} from "../commands/serverDisconnectCommand";
import {IEvent} from "../interfaces/events/IEvent";

export class ServerCommandRegister {

    constructor(public socket: Socket) {
        socket.onAny(KeepAliveListener(socket));

        this.registerCommands([
            {tag: IoCommandEnum.USER_CONNECT, listener: userConnectCommand},
            {tag: IoCommandEnum.SERVER_DISCONNECT, listener: serverDisconnectCommand}
        ]);
    }

    registerCommands(events: IEvent[]) {
        events.forEach(e => this.socket.on(e.tag, e.listener(this.socket)));
    }
}