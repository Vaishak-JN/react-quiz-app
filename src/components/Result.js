import { useContext, useEffect, useState } from "react"
import QuizContext from "../store/quiz-context"
import { useNavigate } from "react-router-dom"
import Confetti from 'react-confetti'

const Result = () => {
    const { score, reset, qns } = useContext(QuizContext)
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
            {/* <h2 ></h2> */}

            {showCeleb && score >= 3 && <Confetti />}
            {score < 3 && <p>Try harder next time.</p>}
            <button onClick={restart}>Play Again</button>
        </div>
    )
}

export default Result