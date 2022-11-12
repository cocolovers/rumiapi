import {IRoom} from "../interfaces/dto/IRoom";

export class RoomDto implements IRoom {
    
    constructor(public id: string,
                public name: string,
                public allowViewers: boolean,
                public createdAt: string,
                public gameStarted: boolean,
                public numberOfPlayers: number
    ) {
    }
}