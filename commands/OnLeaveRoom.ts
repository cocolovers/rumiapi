import {Socket} from "socket.io";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {ILeaveRoomRequest} from "../interfaces/dto/commands/ILeaveRoomRequest";

export const onLeaveRoom = (socket: Socket) =>
    (request: ILeaveRoomRequest, response: (status: boolean, response: null | ICommonError) => void) => {
        response(false, null);
    }
