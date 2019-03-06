import { Player} from "../../src/redux/game/model";
import { GameStateShape, initialState, reducer as gameReducer } from "../../src/redux/game/reducer";
import { nextPlayer } from "../../src/redux/game/actions";

describe("Players flow", () => {

    const player1: Player = {
        name: "Player 1",
        color: "#ff0000"
    };

    const player2: Player = {
        name: "Player 2",
        color: "#ffff00"
    };

    const player3: Player = {
        name: "Player 3",
        color: "#00ffff"
    };

    const player4: Player = {
        name: "Player 4",
        color: "#0000ff"
    };

    it("should update the active player", () => {
        const initialTestState: GameStateShape = {
            ...initialState,
            players: [ player1, player2 ],
            activePlayer: player1
        };
        const action = nextPlayer();

        const updatedState = gameReducer(initialTestState, action);

        expect(updatedState.activePlayer).toEqual(player2);
    });

    it("should update the active player if there's more than 2", () => {
        const initialTestState: GameStateShape = {
            ...initialState,
            players: [ player1, player2, player3, player4 ],
            activePlayer: player2
        };
        const action = nextPlayer();

        const updatedState = gameReducer(initialTestState, action);

        expect(updatedState.activePlayer).toEqual(player3);
    });

    it("should update the active player to the first one, if current is the last one", () => {
        const initialTestState: GameStateShape = {
            ...initialState,
            players: [ player1, player2, player3, player4 ],
            activePlayer: player4
        };
        const action = nextPlayer();

        const updatedState = gameReducer(initialTestState, action);

        expect(updatedState.activePlayer).toEqual(player1);
    });

});
