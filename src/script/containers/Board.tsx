import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {StateShape} from "../../redux/store";
import {GameStateShape} from "../../redux/game/reducer";
import {Column} from "./Column";

interface StateProps {
    game: GameStateShape;
}

type BoardProps = StateProps;

const mapStateToProps = (state: StateShape): StateProps => {
    return {
        game: state.game
    };
}

export const Board = connect(
    mapStateToProps
)(({
    game: {
        board: { fields },
        activePlayer
    }
}: BoardProps) => {
    return (
        <div className="board">
            <div className="active-player">
                Active player: { activePlayer.name }
            </div>
            <div className="fields">
                {
                    fields.map((column: string[], index: number) =>
                        <Column key={ index } column={ column } />
                    )
                }
            </div>
        </div>
    )
});
