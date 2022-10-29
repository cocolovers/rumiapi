import {Socket} from 'socket.io';
import {KeepAliveListener} from '../engine/server/keepAliveListener';
import {IoCommandEnum} from '../enums/IoCommandEnum';
import {userConnectCommand} from "../engine/server/userConnectCommand";
import {serverDisconnectCommand} from "../engine/server/serverDisconnectCommand";
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