import { IBase } from './IBase';

export interface Ilog extends IBase {
	error: (tag: string, message: string) => void;
	debug: (tag: string, message: string) => void;
	info: (tag: string, message: string) => void;
	template: (type: string, tag: string, message: string) => void;
}
