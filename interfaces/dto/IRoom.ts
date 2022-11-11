export interface IRoom {
    id: string;
    name: string;
    gameStarted: boolean;
    createdAt: string;
    numberOfPlayers: number;
    allowViewers: boolean;
}