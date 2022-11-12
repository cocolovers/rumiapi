import {ICommonError} from "../../interfaces/dto/ICommonError";
import {ErrorCodeEnum} from "../enums/ErrorCodeEnum";

export class AlreadyExistError implements ICommonError {
    code: number;

    constructor(public message?: string
    ) {
        this.code = ErrorCodeEnum.ALREADY_EXISTS;
    }
}