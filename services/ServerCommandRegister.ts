import {Socket} from 'socket.io';
import {UpdateUserTime} from '../commands/UpdateUserTime';
import {IoCommandEnum} from '../models/enums/IoCommandEnum';
import {onLogin} from "../commands/OnLogin";
import {IEvent} from "../interfaces/events/IEvent";
import {onUserDiscoconnect} from "../commands/OnUserDiscoconnect";
import {onJoinRoom} from "../commands/OnJoinRoom";
import {onLeaveRoom} from "../commands/OnLeaveRoom";
import {onCreateRoom} from "../commands/OnCreateRoom";

export class ServerCommandRegister {

    constructor(public socket: Socket) {
        socket.onAny(UpdateUserTime(socket));

        this.registerCommands([
            {tag: IoCommandEnum.LOGIN, listener: onLogin},
            {tag: IoCommandEnum.SERVER_DISCONNECT, listener: onUserDiscoconnect},
            {tag: IoCommandEnum.JOIN_ROOM, listener: onJoinRoom},
            {tag: IoCommandEnum.LEAVE_ROOM, listener: onLeaveRoom},
            {tag: IoCommandEnum.CREATE_ROOM, listener: onCreateRoom},
            {tag: IoCommandEnum.GET_ROOM, listener: onCreateRoom},
            {tag: IoCommandEnum.GET_LIST_ROOM, listener: onCreateRoom},

        ]);
    }

    registerCommands(events: IEvent[]) {
        events.forEach(e => this.socket.on(e.tag, e.listener(this.socket)));
    }
}