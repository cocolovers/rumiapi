import {Socket} from 'socket.io';

export interface IBaseCommand {
    socket: Socket;

    registerAction(): void;
}