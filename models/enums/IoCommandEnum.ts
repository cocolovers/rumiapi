export enum IoCommandEnum {
    CONNECTION = 'connection',
    LOGIN = 'user:connect',
    DISCONNECT = 'disconnect',
    SERVER_DISCONNECT = 'io server disconnect',
    NONE = "NONE",
    JOIN_ROOM = 'joinRoom',
    LEAVE_ROOM = 'leaveRoom',
    CREATE_ROOM = 'createRoom',
    GET_ROOM = 'getRoom',
    GET_LIST_ROOM = 'getRoomList'
}