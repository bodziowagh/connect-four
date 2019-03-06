import React, { FunctionComponent } from "react";
import { Player } from "../../redux/game/model";

interface PlayerInfoProps {
    player: Player;
}

export const PlayerInfo: FunctionComponent<PlayerInfoProps> = ({
    player
}) => {
    return (
        <span className="player-info-wrapper">
            <div className="player-info">
                { player.name }
                <span
                    className="player-color"
                    style={ { backgroundColor: player.color } }
                />
            </div>
        </span>
    )
}
