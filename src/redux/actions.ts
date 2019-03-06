import { ExampleActionTypes } from "./game/actions";

type ActionTypes = ExampleActionTypes;

export interface Action<T> {
    type: ActionTypes;
    payload: T;
}
