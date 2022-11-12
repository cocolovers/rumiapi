import {Socket} from "socket.io";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {AlreadyExistError} from "../models/errors/AlreadyExistError";
import {IGetListRoomRequest} from "../interfaces/dto/commands/IGetListRoomRequest";
import {IGetListRoomReponse} from "../interfaces/dto/commands/IGetListRoomReponse";

export const onGetListRoom = (socket: Socket) =>
    (request: IGetListRoomRequest, response: (status: boolean, response: IGetListRoomReponse | ICommonError) => void) => {
        response(false, new AlreadyExistError());
    }