import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { StateShape } from "../../redux/store";
import { GameStateShape } from "../../redux/game/reducer";
import { Column } from "../components/Column";
import { endGame, nextPlayer, placeToken } from "../../redux/game/actions";
import { bindActionCreators } from "redux";
import { getWinner } from "../services/gameValidator";
import { PlayerInfo } from "../components/PlayerInfo";

interface StateProps {
    game: GameStateShape;
}

interface DispatchProps {
    placeToken: typeof placeToken;
    nextPlayer: typeof nextPlayer;
    endGame: typeof endGame;
}

type BoardProps = StateProps & DispatchProps;

const mapStateToProps = (state: StateShape): StateProps => {
    return {
        game: state.game
    };
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
    return bindActionCreators({
        placeToken,
        nextPlayer,
        endGame
    }, dispatch);
}

export const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(({
    game: {
        board: { fields, emptyValue },
        activePlayer,
        winner
    },
    placeToken,
    nextPlayer,
    endGame
}: BoardProps) => {
    const isGameFinished: boolean = !!winner;

    const handleClick = (columnIndex: number) => {
        const canPlaceToken = fields[columnIndex].indexOf(emptyValue) !== -1;

        if (isGameFinished || !canPlaceToken) {
            return;
        }

        placeToken({ columnIndex })
        nextPlayer();
    }

    const newWinner = getWinner({});

    if (!isGameFinished && newWinner) {
        endGame({ winner: newWinner });
    }

    const player = !isGameFinished ? activePlayer : winner;

    return (
        <div className="board">
            <div className="board-header">
                {
                    !isGameFinished ? "Active player: " : "Winner: "
                }
                <PlayerInfo player={ player } />
            </div>

            <div className="fields">
                {
                    fields.map((column: string[], columnIndex: number) =>
                        <Column
                            key={ columnIndex }
                            column={ column }
                            onClick={ () => handleClick(columnIndex) }
                        />
                    )
                }
            </div>
        </div>
    )
});
