import { Board, Player } from "../../src/redux/game/model";
import { getWinner } from "../../src/script/utils/gameValidator";

describe("Game validator", () => {

    const defaultBoard = {
        width: 7,
        height: 6,
        emptyValue: "",
        winningCount: 4
    }

    const player1: Player = {
        name: "Player 1",
        color: "#ff0000"
    };

    const player2: Player = {
        name: "Player 2",
        color: "#ffff00"
    };

    const players = [ player1, player2 ];
    const p1 = player1.color;
    const p2 = player2.color;

    it("should not win an empty board", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(null);
    });

    it("should player 1 win -> horizontal match (1)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ p1, "", "", "", "", "" ],
                [ p1, "", "", "", "", "" ],
                [ p1, "", "", "", "", "" ],
                [ p1, "", "", "", "", "" ],
                [ p1, "", "", "", "", "" ],
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 1 win -> horizontal match (2)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 1 win -> horizontal match (3)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 2 win -> vertical match (1)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ p1, p2, p2, p2, p2, "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

    it("should player 2 win -> vertical match (2)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ p2, p2, p2, p2, "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

    it("should player 2 win -> vertical match (3)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ p1, p1, p2, p2, p2, p2 ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

    it("should player 1 win -> diagonal left up to right down match (1)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", p1, "", "" ],
                [ "", "", p1, "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 1 win -> diagonal left up to right down match (2)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", p1, "", "" ],
                [ "", "", p1, "", "", "" ],
                [ "", p1, "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 1 win -> diagonal left up to right down match (3)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", p1 ],
                [ "", "", "", "", p1, "" ],
                [ "", "", "", p1, "", "" ],
                [ "", "", p1, "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player1);
    });

    it("should player 2 win -> diagonal left down to right up match (1)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ p2, "", "", "", "", "" ],
                [ "", p2, "", "", "", "" ],
                [ "", "", p2, "", "", "" ],
                [ "", "", "", p2, "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

    it("should player 2 win -> diagonal left down to right up match (2)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", p2, "", "", "", "" ],
                [ "", "", p2, "", "", "" ],
                [ "", "", "", p2, "", "" ],
                [ "", "", "", "", p2, "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

    it("should player 2 win -> diagonal left down to right up match (3)", () => {
        const board: Board = {
            ...defaultBoard,
            fields: [
                [ "", "", p2, "", "", "" ],
                [ "", "", "", p2, "", "" ],
                [ "", "", "", "", p2, "" ],
                [ "", "", "", "", "", p2 ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ]
        };

        expect(getWinner({ board, players })).toEqual(player2);
    });

});
