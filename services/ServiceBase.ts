import {IBase} from '../interfaces/services/IBase';

export class ServiceBase implements IBase {
    tag = this.constructor.name;
}