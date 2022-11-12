import {Socket} from "socket.io";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {AlreadyExistError} from "../models/errors/AlreadyExistError";
import {ICreateRoomRequest} from "../interfaces/dto/commands/ICreateRoomRequest";
import {ICreateRoomResponse} from "../interfaces/dto/commands/ICreateRoomResponse";

export const onCreateRoom = (socket: Socket) =>
    (request: ICreateRoomRequest, response: (status: boolean, response: ICreateRoomResponse | ICommonError) => void) => {
        response(false, new AlreadyExistError());
    }