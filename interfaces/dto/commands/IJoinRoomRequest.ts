import {RoomUsersJoinedAs} from "../../../models/enums/RoomUsersJoinedAs";

export interface IJoinRoomRequest {
    id: string;
    joinedAs: RoomUsersJoinedAs.PLAYER | RoomUsersJoinedAs.VIEWER;
    password: string;
}