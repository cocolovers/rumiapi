import {ICommonError} from "../interfaces/dto/ICommonError";

export class CommonErrorDto implements ICommonError {

    constructor(public code: number,
                public message: string
    ) {
    }
}