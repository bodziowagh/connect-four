import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { StateShape } from "../../redux/store";
import { GameStateShape } from "../../redux/game/reducer";
import { Column } from "../components/Column";
import { placeToken } from "../../redux/game/actions";
import { bindActionCreators, Dispatch } from "redux";

interface StateProps {
    game: GameStateShape;
}

interface DispatchProps {
    placeToken: typeof placeToken;
}

type BoardProps = StateProps & DispatchProps;

const mapStateToProps = (state: StateShape): StateProps => {
    return {
        game: state.game
    };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return bindActionCreators({
        placeToken
    }, dispatch);
}

export const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(({
    game: {
        board: { fields },
        activePlayer
    },
    placeToken
}: BoardProps) => {

    return (
        <div className="board">
            <div className="active-player">
                Active player: { activePlayer.name }
            </div>
            <div className="fields">
                {
                    fields.map((column: string[], columnIndex: number) =>
                        <Column
                            key={ columnIndex }
                            column={ column }
                            onClick={ () => placeToken({ columnIndex }) }
                        />
                    )
                }
            </div>
        </div>
    )
});
