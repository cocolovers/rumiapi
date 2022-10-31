import {IUser} from '../interfaces/dto/IUser';
import {Socket} from 'socket.io';

export class UserDto implements IUser {
    timestamp: number;

    constructor(public id: string,
                public name: string,
                public socketId: string,
                public socket: Socket) {
        this.timestamp = Date.now();
    }
}