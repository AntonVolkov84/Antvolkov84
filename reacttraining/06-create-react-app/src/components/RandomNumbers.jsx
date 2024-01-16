import { useState } from 'react'
import { generateRandomNum } from '../utils/generateRandomNum'


export function RandomNumbers(props){
    const [randomNum, setRandomNum] = useState(generateRandomNum(props.maxNum))
    
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(props.maxNum))
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    )
}