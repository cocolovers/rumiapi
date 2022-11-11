import {Ilog} from '../interfaces/services/ILog';
import {ServiceBase} from './ServiceBase';
import {getDateNow} from "./Date";

const a = (text: string) => {
    console.log(text);
};

export class Log extends ServiceBase implements Ilog {

    template(type: string, tag: string, message: string) {
        return `[${getDateNow()}] [${tag}] [${type}] ${message}`;
    }

    debug(tag: string, message: string): void {
        const data = this.template('error', tag, message);
        console.debug(data);
    }

    error(tag: string, message: string): void {
        const data = this.template('error', tag, message);
        console.error(data);
    }

    info(tag: string, message: string): void {
        const data = this.template('info', tag, message);
        console.info(data);
    }
}
