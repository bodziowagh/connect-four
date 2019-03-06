import React from "react";
import { Board } from "./containers/Board";

export class App extends React.Component<{}> {

    render() {
        return (
            <div className="app">
                <Board />
            </div>
        );
    }
}
