import { combineReducers, createStore } from "redux";
import { GameStateShape, reducer as game} from "./game/reducer";

export type StateShape = {
    game: GameStateShape
};

const initialState = {};

const reducers = combineReducers({
    game
});

export const store = createStore(reducers, initialState);
