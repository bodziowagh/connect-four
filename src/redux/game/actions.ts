import { Player } from "./model";
import { Action } from "../actions";

export const PLACE_TOKEN = "END_GAME";
export const NEXT_PLAYER = "NEXT_PLAYER";
export const END_GAME = "END_GAME";

export interface PlaceTokenActionPayload {
    columnIndex: number;
}

export function placeToken(payload: PlaceTokenActionPayload): Action<PlaceTokenActionPayload> {
    return {
        type: PLACE_TOKEN,
        payload
    };
};

export interface NextPlayerActionPayload {}

export function nextPlayer(payload: NextPlayerActionPayload = {}): Action<NextPlayerActionPayload> {
    return {
        type: NEXT_PLAYER,
        payload
    };
};

export interface EndGameActionPayload {
    winner: Player;
}

export function endGame(payload: EndGameActionPayload): Action<EndGameActionPayload> {
    return {
        type: END_GAME,
        payload
    };
};
