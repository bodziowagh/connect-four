import { initPlayers, Player } from "../../src/redux/game/model";

describe("Init players", () => {

    it("should initialize players with default values", () => {
        const expectedPlayers: Player[] = [{
            name: "Player 1",
            color: "#ff0000"
        }, {
            name: "Player 2",
            color: "#ffff00"
        }];
        const newPlayers: Player[] = initPlayers();
        
        expect(newPlayers).toEqual(expectedPlayers);
    });

    it("should initialize players with custom values", () => {
        const expectedPlayers: Player[] = [{
            name: "Player 1",
            color: "#000000"
        }, {
            name: "Player 2",
            color: "#ffffff"
        }, {
            name: "Player 3",
            color: "#11ff33"
        }];
        const newPlayers: Player[] = initPlayers(3, [
            "#000000",
            "#ffffff",
            "#11ff33"
        ]);

        expect(newPlayers).toEqual(expectedPlayers);
    });

    it("should throw if there are not enough colors", () => {
       const exception = new Error("Not enough colors!");

       expect(() => initPlayers(5, [])).toThrow(exception);
    });

});
