import {Socket} from "socket.io";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {AlreadyExistError} from "../models/errors/AlreadyExistError";
import {IGetRoomRequest} from "../interfaces/dto/commands/IGetRoomRequest";
import {IGetRoomResponse} from "../interfaces/dto/commands/IGetRoomResponse";

export const onRoom = (socket: Socket) =>
    (request: IGetRoomRequest, response: (status: boolean, response: IGetRoomResponse | ICommonError) => void) => {
        response(false, new AlreadyExistError());
    }