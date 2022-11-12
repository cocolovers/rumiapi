import {IRoomUser} from "../IRoomUser";
import {IRoom} from "../IRoom";

export interface IJoinRoomReponse extends IRoom {
    players: [IRoomUser]
}