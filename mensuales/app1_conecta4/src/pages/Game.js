import React, { Component } from 'react';

import Rules from '../core/Rules';
import Board from '../components/Board';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
    }

    initialState() {
        return {
            history: [
                {
                    positions: Array(Rules.COLUMNS * Rules.ROWS).fill(null),
                }
            ],
            victories: {
                red: 0,
                yellow: 0
            },
            step: 0,
            current: Rules.PLAYERS.RED
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.step + 1);
        const current = history[history.length - 1];
        const positions = current.positions.slice();
        const nextPosition = Rules.checkPosition(positions, i);
        const lastPlayer = this.state.current;

        if (Rules.calculateWinner(positions) || positions[nextPosition]) {
            return;
        }

        positions[nextPosition] = lastPlayer
        this.setState({
            history: history.concat([
                {
                    positions: positions
                }
            ]),
            step: history.length,
            current: Rules.nextPlayer(lastPlayer)
        })

        this.countWinner(positions, lastPlayer)
        console.log(`He clicado en ${i}`)
    }

    restartGame() {
        const currentScores = this.state.victories;

        this.setState({
            ...this.initialState(),
            victories: currentScores
        });
    }

    restartScores() {
        this.setState({
            victories: {
                red: 0,
                yellow: 0,
            }
        })
    }

    countWinner(positions, winner) {
        if (Rules.calculateWinner(positions)) {
            const currentScores = this.state.victories;
            this.setState({
                victories: {
                    red: currentScores.red += winner === Rules.PLAYERS.RED ? 1 : 0,
                    yellow: currentScores.yellow += winner === Rules.PLAYERS.YELLOW ? 1 : 0,
                }
            })
        }

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.step];
        const winner = Rules.calculateWinner(current.positions);
        const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.current}`;
        /* const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : 'Go to game start';
            return (

                <li key={move}>
                    <button onClick={() => this.restartGame()}>{desc}</button>
                </li>
            );
        }); */

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='game-scores d-flex justify-content-around'>
                                <h2>RED: {this.state.victories.red}</h2>
                                <h2>YELLOW: {this.state.victories.yellow}</h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className='game-board'>
                                <Board positions={current.positions} onClick={i => this.handleClick(i)} />
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='game-history my-auto'>
                                <ul className='list-group list-group-flush'>
                                    <li key={'restart_game'} className='list-group-item text-center border-0'>
                                        <button className='btn btn-outline-danger' onClick={() => this.restartGame()}>Restart game</button>
                                    </li>
                                    <li key={'restart_score'} className='list-group-item text-center border-0'>
                                        <button className='btn btn-outline-warning' onClick={() => this.restartScores()}>Restart scores</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <div className='game-status text-end'>
                                <h6 className='fw-bold'>{status}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

