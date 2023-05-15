import { useContext, useEffect, useState } from "react"
import QuizContext from "../store/quiz-context"
import { useNavigate } from "react-router-dom"
import Confetti from 'react-confetti'

const Result = () => {
    const { score, reset, qns, timeTaken } = useContext(QuizContext)
    const navigate = useNavigate()
    const [showCeleb, setShowCeleb] = useState(true)


    useEffect(() => {

        let time = setTimeout(() => {
            setShowCeleb(false)
        }, 6000);

        return () => {
            clearTimeout(time)
        }

    }, [])

    const restart = () => {
        reset()
        navigate("/")
    }

    return (
        <div className="result">
            <h1>Your Score: <span className="score">{score}</span></h1>
            <br />
            <h3>You completed in <span style={{ color: "crimson" }}>{timeTaken}</span>s</h3>

            {showCeleb && score >= 3 && <Confetti />}
            {score < 3 && <p style={{ color: "crimson" }}>Try harder next time.</p>}
            <button onClick={restart}>Play Again</button>
        </div>
    )
}

export default Result