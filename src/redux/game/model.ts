export interface Board {
    fields: string[][];
    width: number;
    height: number;
    emptyValue: string;
    winningCount: number;
}

export interface Player {
    name: string;
    color: string;
}

export const DEFAULT_BOARD_WIDTH = 7;
export const DEFAULT_BOARD_HEIGHT = 6;
export const DEFAULT_EMPTY_VALUE = "";
export const DEFAULT_WINNING_COUNT = 4;

export const initBoard = (
    width: number = DEFAULT_BOARD_WIDTH,
    height: number = DEFAULT_BOARD_HEIGHT,
    emptyValue: string = DEFAULT_EMPTY_VALUE,
    winningCount: number = DEFAULT_WINNING_COUNT
): Board => {
    const fields = Array.from(new Array(width), () => new Array(height).fill(emptyValue));

    return {
        fields,
        width,
        height,
        emptyValue,
        winningCount
    };
}

const DEFAULT_PLAYER_COUNT = 2;
const DEFAULT_COLORS = [ "#ff0000", "#ffff00" ]
const DEFAULT_PLAYER_NAME_PREFIX = "Player";

export const initPlayers = (
    count: number = DEFAULT_PLAYER_COUNT,
    colors: string[] = DEFAULT_COLORS
): Player[] => {
    if (colors.length < count) {
        throw new Error("Not enough colors!");
    }

    return new Array(count).fill({}).map((e, i) => ({
        name: `${ DEFAULT_PLAYER_NAME_PREFIX } ${ i + 1 }`,
        color: colors[i]
    }))
}
