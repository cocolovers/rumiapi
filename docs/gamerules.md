## Rumi

Rummikub is a tile-based game for 2 to 4 players. There are 106 tiles, 104 are numbers from 1 to 13 in four different
colors red/yellow/blue/black those are repeates twice) and 2 jokers.

## Game Rules

Turn-based, every player play in its turn.

### Place a tile

In order to place any tile-set on desk It should be a minimum of three tiles with the following rules

- Same number but different colors. Maximum 4 tiles in a set (e.g.: Number 4 red, number 4 black, number 4 yellow,
  number 4 blue)
- Straight flush any three tiles sequence in the same color. Maximum 13 tiles in a set (e.g.: number 1 red, number 2
  red, number 3 red)
- Joker plays as any tile number (e.g.: number 1 red, joker, number 3 red. Joker value is 2 red) (e.g.: number 13 black,
  number 13 blue, joker. Joker value is 13 yellow or blue)

### First movement of each player

- Every player have to sum a minimum value of 30 at first movement
- First movement cannot edit other players' tiles

### After first movement

Every movement in this section must respect `Place a tile rule` once movement end.

- Player can place any tile when it fits in desk. e.g.:
    - Player hand: 2 black, 3 red, 5 yellow, 7 black,
    - Desk tile-sets: 1st `[3 black, 4 black, 5 black, 6 black, 7 black, 8 black, 9 black]`,
      2nd `[5 red, 5 black,5 blue]`,
    - Player movement:
        - Player can place its 5 yellow in 2nd tile-set (Due there is no 5 yellow in that tile-set)
        - Player can place its 2 black in 1st tile-set (Due number sequence and there is not 2 black already)

- Player can split any tile-set in order to place a tile. e.g.:
    - Player hand: 2 black, 3 red, 5 yellow, 7 black,
    - Desk tile-sets: 1st `[3 black, 4 black, 5 black, 6 black, 7 black, 8 black, 9 black]`,
      2nd `[5 red, 5 black,5 blue]`,
    - Player movement:
        - Player can split 1st tile-set in `[3 black, 4 black, 5 black, 6 black, 7 black]` and 2nd
          tile-set `[Player 7 black, 8 black, 9 black]`. Note that player had split 1st tile-set in 2 tile-set placing
          its
          7 black on 2nd tile-set. Those 2 new tile-set respect `Place a tile rule`.

- Player can move all tiles from a tile-set in order to place one or more of his/her tiles. It must
  respect `Place a tile rule` e.g.:
    - Player hand: 4 black, 3 blue, 4 blue, 3 yellow 11 red
    - Desk tile-sets: 1st `[6 black, 7 black, 8 black]`, 2nd `[5 yellow, 5 black,5 blue]`,
      3rd `[2 yellow, 3 yellow, 4 yellow]`
    - Player movement:
        - Player move `5 black` from 2nd tile-set to 1st and place its `4 black` remaining to 1st
          tile-set `[4 black, 5 black, 6 black, 7 black, 8 black]` and 2nd `[5 yellow,5 blue]`
        - Player move `5 yellow` from 2nd tile-set to 3rd remaining to 2nd tile-set `[5 blue]` and 3rd
          to   `[2 yellow, 3 yellow, 4 yellow, 5 yellow]`
        - Player move its 3 blue, 4 blue to 2nd tile-set remaining 2nd tile-set to `[3 blue, 4 blue, 5 blue]`

### Every movement

- If player do not have any movement to play at turn, player have to take one tile and cannot play that turn.

### Win condition

- Having no tiles in player hand makes player win