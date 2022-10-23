import {Socket} from 'socket.io';
import {IBaseCommand} from '../interfaces/commands/IBaseCommand';

export abstract class BaseCommand implements IBaseCommand {
    registerAction(): void {
        return;
    }

    constructor(public socket: Socket, public actionName: string) {
        this.registerAction();
    }
}