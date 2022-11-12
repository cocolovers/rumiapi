import {RoomUsersJoinedAs} from "../../models/enums/RoomUsersJoinedAs";

export interface IRoomUser {
    id: string;
    name: string;
    joinedAs: RoomUsersJoinedAs.PLAYER | RoomUsersJoinedAs.VIEWER;
    isLeader: boolean;
}