import {services} from '../services/services';
import {TagEnum} from '../models/enums/TagEnum';
import {IUserLoginRequest} from '../interfaces/dto/commands/IUserLoginRequest';
import {MessageEnum} from '../models/enums/MessageEnum';
import {UserDto} from '../models/UserDto';
import {serverUsers} from "../models/consts/Users";
import {Socket} from "socket.io";
import {ErrorMessageEnum} from "../models/enums/ErrorMessageEnum";
import {IUserLoginResponse} from "../interfaces/dto/commands/IUserLoginResponse";
import {ICommonError} from "../interfaces/dto/ICommonError";
import {AlreadyExistError} from "../models/errors/AlreadyExistError";

export const onLogin = (socket: Socket) =>
    (request: IUserLoginRequest, response: (status: boolean, response: IUserLoginResponse | ICommonError) => void) => {

        services.log.info(TagEnum.UserConnectedCommand, `${MessageEnum.USER_CONNECTED} - ${request.name} ${request.id}`);

        if (serverUsers.has(request.name) && serverUsers.get(request.name)?.id == socket.id) {
            return;
        }

        if (serverUsers.has(request.name)) {
            response(false, new AlreadyExistError(ErrorMessageEnum.USER_EXISTS));
        }

        serverUsers.set(request.name, new UserDto(request.id, request.name, socket.id, socket));
        response(true, request);
    }