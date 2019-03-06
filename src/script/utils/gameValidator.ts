import { Board, Player } from "../../redux/game/model";

export interface GetWinnerProps {
    board: Board;
    players: Player[];
}

export const getWinner = ({
    board: { fields, width, height, emptyValue, winningCount },
    players
}: GetWinnerProps): Player | null => {
    const getPlayer = (color: string) => players.find((player) => player.color === color);

    // Vertical
    for (const column of fields) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (const field of column) {
            if (field === emptyValue) {
                break;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    // Horizontal
    for (let y = 0; y < height; y++) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (let x = 0; x < width; x++) {
            const field = fields[x][y];

            if (field === emptyValue) {
                consecutiveCount = 0;
                player = null;
                continue;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    // Diagonal /
    for (let y = 0; y <= height - winningCount; y++) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (let i = 0; i < width && y + i < height; i++) {
            const field = fields[i][i + y];

            if (field === emptyValue) {
                consecutiveCount = 0;
                player = null;
                continue;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    for (let x = 1; x <= width - winningCount; x++) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (let i = 0; i < height && x + i < width; i++) {
            const field = fields[i + x][i];

            if (field === emptyValue) {
                consecutiveCount = 0;
                player = null;
                continue;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    // Diagonal \
    for (let y = 0; y <= height - winningCount; y++) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (let i = width - 1; i > 0 && y + width - i - 1 < height; i--) {
            const field = fields[i][y + width - i];

            if (field === emptyValue) {
                consecutiveCount = 0;
                player = null;
                continue;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    for (let x = width - 1; x >= winningCount; x--) {
        let consecutiveCount = 0;
        let player: Player = null;

        for (let i = 0; i < height && x - i >= 0; i++) {
            const field = fields[x - i][i];

            if (field === emptyValue) {
                consecutiveCount = 0;
                player = null;
                continue;
            }

            if (player && player.color === field) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
                player = getPlayer(field);
            }

            if (consecutiveCount >= winningCount) {
                return player;
            }
        }
    }

    return null;
}
