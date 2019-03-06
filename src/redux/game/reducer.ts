import { Action } from "../actions";
import { END_GAME, NEXT_PLAYER, PLACE_TOKEN } from "./actions";
import { Board, initBoard, initPlayers, Player } from "./model";

export interface GameStateShape {
    board: Board;
    players: Player[];
    activePlayer: Player;
    winner: Player;
}

const players = initPlayers();

export const initialState = {
    board: initBoard(),
    players,
    activePlayer: players[0],
    winner: null as Player
};

const updateFields = (board: Board, columnIndex: number, player: Player): string[][] => {
    const column = board.fields[columnIndex].slice();
    const firstEmptyIndex = column.indexOf(board.emptyValue);

    if (firstEmptyIndex === -1) {
        return board.fields;
    }

    column[firstEmptyIndex] = player.color;

    return [
        ...( board.fields.slice(0, columnIndex) ),
        column,
        ...( board.fields.slice(columnIndex + 1) )
    ];
}

const getNextPlayer = (players: Player[], activePlayer: Player) => {
    const activePlayerIndex = players.indexOf(activePlayer);

    return activePlayerIndex + 1 < players.length ?
        players[activePlayerIndex + 1] :
        players[0];
}

export function reducer(state: GameStateShape = initialState, action: Action<any>): GameStateShape {

    switch (action.type) {

        case PLACE_TOKEN:
            return {
                ...state,
                board: {
                    ...state.board,
                    fields: updateFields(
                        state.board,
                        action.payload.columnIndex,
                        state.activePlayer
                    )
                }
            };

        case NEXT_PLAYER:
            return {
                ...state,
                activePlayer: getNextPlayer(state.players, state.activePlayer)
            }

        case END_GAME:
            return {
                ...state,
                winner: action.payload.winner
            }
    }

    return state;
}
