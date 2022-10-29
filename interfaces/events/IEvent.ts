import {Socket} from "socket.io";

export interface IEvent {
    tag: string;
    listener: (socket: Socket) => (...params: any) => void;
}