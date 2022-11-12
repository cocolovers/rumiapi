import {Socket} from "socket.io";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {IJoinRoomRequest} from "../interfaces/dto/commands/IJoinRoomRequest";
import {IJoinRoomReponse} from "../interfaces/dto/commands/IJoinRoomReponse";
import {AlreadyExistError} from "../models/errors/AlreadyExistError";


export const onJoinRoom = (socket: Socket) =>
    (request: IJoinRoomRequest, response: (status: boolean, response: IJoinRoomReponse | ICommonError) => void) => {
        response(false, new AlreadyExistError());
    }
