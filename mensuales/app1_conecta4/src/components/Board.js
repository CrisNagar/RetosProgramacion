import React, { Component } from "react";

import CircleBoard from "./CircleBoard";

export default class Board extends Component {
    renderPosition(i) {
        return (
            <CircleBoard value={this.props.positions[i]} onClick={() => this.props.onClick(i)} />
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="board-row d-flex">
                    {this.renderPosition(0)}
                    {this.renderPosition(1)}
                    {this.renderPosition(2)}
                    {this.renderPosition(3)}
                    {this.renderPosition(4)}
                    {this.renderPosition(5)}
                    {this.renderPosition(6)}
                </div>

                <div className="board-row d-flex">
                    {this.renderPosition(7)}
                    {this.renderPosition(8)}
                    {this.renderPosition(9)}
                    {this.renderPosition(10)}
                    {this.renderPosition(11)}
                    {this.renderPosition(12)}
                    {this.renderPosition(13)}
                </div>

                <div className="board-row d-flex">
                    {this.renderPosition(14)}
                    {this.renderPosition(15)}
                    {this.renderPosition(16)}
                    {this.renderPosition(17)}
                    {this.renderPosition(18)}
                    {this.renderPosition(19)}
                    {this.renderPosition(20)}
                </div>

                <div className="board-row d-flex">
                    {this.renderPosition(21)}
                    {this.renderPosition(22)}
                    {this.renderPosition(23)}
                    {this.renderPosition(24)}
                    {this.renderPosition(25)}
                    {this.renderPosition(26)}
                    {this.renderPosition(27)}
                </div>

                <div className="board-row d-flex">
                    {this.renderPosition(28)}
                    {this.renderPosition(29)}
                    {this.renderPosition(30)}
                    {this.renderPosition(31)}
                    {this.renderPosition(32)}
                    {this.renderPosition(33)}
                    {this.renderPosition(34)}
                </div>

                <div className="board-row d-flex">
                    {this.renderPosition(35)}
                    {this.renderPosition(36)}
                    {this.renderPosition(37)}
                    {this.renderPosition(38)}
                    {this.renderPosition(39)}
                    {this.renderPosition(40)}
                    {this.renderPosition(41)}
                </div>
            </React.Fragment>
        )
    }
}