import {Socket} from 'socket.io';

export interface IUser {
    socket: Socket;
    socketId: string;
    name: string;
    id: number;
    timestamp: number;
}