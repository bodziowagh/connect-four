import { Action } from "../actions";
import { ExamplePayload } from "./actions";
import {Board, initBoard, initPlayers, Player} from "./model";

export interface GameStateShape {
    board: Board;
    players: Player[];
    activePlayer: Player;
    winner: Player;
}

const players = initPlayers();

const initialState = {
    board: initBoard(),
    players,
    activePlayer: players[0],
    winner: null as Player
};

export function reducer(state: GameStateShape = initialState, action: Action<ExamplePayload>): GameStateShape {

    return state;
}
