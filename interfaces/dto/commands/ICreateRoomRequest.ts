export interface ICreateRoomRequest {
    name: string;
    password: string;
    maximumPlayers: number;
    allowViewers: string;
}