import React, { useState } from 'react' 
import './EightBall.css' 

// EightBall Component
// destructure "answers" 
const EightBall = ({answers}) => {
    const randomAnswer = (array) => {
        const idx = Math.floor(Math.random() * array.length)
        return array[idx] 
    }
    // useState
    const [color, setColor] = useState('black')
    const [msg, setMsg] = useState('Think of a Question') 
    const handleClick = () => {
        // get a randomAnswer from "answers" above
        const { msg, color } = randomAnswer(answers)  
        setMsg(msg)
        setColor(color) 
    }
    // reset button to initial state
    const resetClick = () => {
        setMsg('Think of a Question')
        setColor('black')
    }
    return (
        // click on the EightBall to change color/msg
        // inline style to change backgroundColor
        <>
        <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color}}>
            <p>{msg}</p>
        </div>
        <button onClick={resetClick}>RESET</button>
        </>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}

export default EightBall 