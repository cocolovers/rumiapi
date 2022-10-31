import {Socket} from 'socket.io';

export interface IUser {
    socket: Socket;
    socketId: string;
    name: string;
    id: string;
    timestamp: number;
}