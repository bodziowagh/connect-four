import { Player} from "../../src/redux/game/model";
import { initialState, reducer as gameReducer } from "../../src/redux/game/reducer";
import { placeToken } from "../../src/redux/game/actions";

describe("Board flow", () => {

    const player: Player = {
        name: "Player 1",
        color: "#ff0000"
    };

    it("should place a new token in an expected place on the board", () => {
        const expectedFields = [
            [ player.color, "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ]
        ];
        const action = placeToken({
            columnIndex: 0,
            player
        });

        const updatedState = gameReducer(undefined, action);

        expect(updatedState.board.fields).toEqual(expectedFields);
    });

    it("should place a new token in an expected place on the board, on top of existing tokens", () => {
        const expectedFields = [
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "#ffffff", "#000000", player.color, "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ],
            [ "", "", "", "", "", "" ]
        ];
        const action = placeToken({
            columnIndex: 3,
            player
        });

        const initialTestState = {
            ...initialState,
            board: {
                ...initialState.board,
                fields: [
                    [ "", "", "", "", "", "" ],
                    [ "", "", "", "", "", "" ],
                    [ "", "", "", "", "", "" ],
                    [ "#ffffff", "#000000", "", "", "", "" ],
                    [ "", "", "", "", "", "" ],
                    [ "", "", "", "", "", "" ],
                    [ "", "", "", "", "", "" ]
                ]
            }
        }

        const updatedState = gameReducer(initialTestState, action);

        expect(updatedState.board.fields).toEqual(expectedFields);
    });

});
