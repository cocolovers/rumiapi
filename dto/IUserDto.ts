import {IUser} from '../interfaces/dto/IUser';
import {Socket} from 'socket.io';

export class IUserDto implements IUser {
    timestamp: number;

    constructor(public id: number,
                public name: string,
                public socketId: string,
                public socket: Socket) {
        this.timestamp = Date.now();
    }
}