import {Socket} from 'socket.io';
import {KeepAliveListener} from '../engine/server/KeepAliveListener';
import {UserConnectCommand} from '../engine/server/UserConnectCommand';
import {IoCommandEnum} from '../enums/IoCommandEnum';
import {ServerDisconnectCommand} from '../engine/server/ServerDisconnectCommand';

export class ServerCommandRegister {
    constructor(socket: Socket) {
        new KeepAliveListener(socket, IoCommandEnum.NONE);
        new UserConnectCommand(socket, IoCommandEnum.CONNECTION);
        new ServerDisconnectCommand(socket, IoCommandEnum.SERVER_DISCONNECT);
    }
}