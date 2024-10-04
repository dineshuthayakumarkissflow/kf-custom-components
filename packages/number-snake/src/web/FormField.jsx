import React, { Fragment, useState, useRef, useEffect } from 'react'
import Game from './Game.jsx'
import { Divider, Space, Checkbox, Flex, Select, Button } from 'antd'
import { stringToBoolean } from './utils.js'
import { Switch } from 'antd'

function App(props) {
    const [gameState, setGameState] = useState(true)
    const [showCellId, setShowCellId] = useState(
        stringToBoolean(localStorage.getItem('showCellId')) ?? false
    )
    const gameRef = useRef()

    const [aliveSnakes, setAliveSnakes] = useState([])

    const [selectedSnakes, setSelectedSnakes] = useState({})

    useEffect(() => {
        setSelectedSnakes((prev) => {
            const newSelectedSnakes = {}
            for (const snakeId of Object.keys(aliveSnakes)) {
                if (snakeId in prev) {
                    newSelectedSnakes[snakeId] = selectedSnakes[snakeId]
                }
            }
            return newSelectedSnakes
        })
    }, [aliveSnakes])

    const changeGameState = (value) => {
        if (value) {
            gameRef.current.resumeGame()
        } else {
            gameRef.current.pauseGame()
        }
        setGameState(value)
    }

    return (
        <Fragment>
            {/* <div style={{ height: '180px' }}>
				{Object.keys(aliveSnakes).map((snakeId) => {
					return (
						<div key={snakeId}>
							<Checkbox
								checked={selectedSnakes[snakeId]}
								onChange={(e) => {
									const isChecked = e.target.checked;
									setSelectedSnakes((prev) => {
										return {
											...prev,
											[snakeId]: isChecked,
										};
									});
								}}
							>
								{snakeId}
							</Checkbox>
						</div>
					);
				})}
				<Space>
					Game running? <Switch checked={gameState} onChange={changeGameState} />;
					<Checkbox
						checked={showCellId}
						onChange={(e) => {
							const val = Boolean(e.target.checked);
							localStorage.setItem('showCellId', val);
							setShowCellId(val);
						}}
					>
						Show cell ID?
					</Checkbox>
				</Space>
				<Flex>
					<Space>
						<Button
							type="primary"
							onClick={() => {
								const snakesToMove = Object.entries(selectedSnakes).reduce((snakes, [key, value]) => {
									if (value) {
										// value would be true or false (boolean).
										snakes.push(key);
									}
									return snakes;
								}, []);
								gameRef.current.nextMove(snakesToMove);
							}}
						>
							Next move
						</Button>
					</Space>
				</Flex>
				<Divider dashed />
			</div> */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <Game
                    value={props.value}
                    updateValue={props.actions.updateValue}
                    ref={gameRef}
                    showCellId={showCellId}
                    gameState={gameState}
                    updateSnakeList={setAliveSnakes}
                />
            </div>
        </Fragment>
    )
}

export default App
