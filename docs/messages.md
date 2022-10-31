This doc have to be transformed into html asyncapi

See: 
- https://github.com/asyncapi/generator
- https://raw.githubusercontent.com/asyncapi/generator/v1.4.0/test/docs/ws.yml
- https://github.com/asyncapi/html-template

### Login

#### do login
- request ->  IUser {id: "", name: ""}
- response -> Boolean status, IUser {id: "", name: ""}

## room
### roomDtos
#### roomData
long idRoom, boolean gameStarted, date createdAt, int numberOfPlayers, object @roomDtos/roomUserList
#### roomUserList
string id, string name, enum joinedAs(viewer/player), bool isLeader
### commands
#### create
- request -> string name, string password, int maximumPlayers(2/6), boolean admitViewers
- response -> true/false

Exceptions
- room name already exist

#### join
- request -> long roomId, string joinAs(viewer/player), string password
- response -> boolean status, messageTrue/messageFalse
    - true: @roomDtos/roomUserList
    - false: any Exception

Exceptions
- room full
- incorrect password
- No more slot for player
- unable to join room
- room does not exist

#### list
- request -> void/filter
    - filter: long roomId, string roomName, string playerName, boolean slotForPlayer, boolean admitViewers
- response -> @roomDtos/roomData

Exceptions
- No rooms with that filters

#### leave
If user leaves it should see if there is no more players/viewer in room  
- request -> long roomId
- response ->
  - true: void
  - false: any Exceptions

Exceptions 
- You cannot leave current room
- Game already started
- You're not in room
- You're not in that room

#### Exception
- Generic error
