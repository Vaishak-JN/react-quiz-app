import { useContext, useState, useEffect } from "react"
import QuizContext from "../store/quiz-context"
import { useNavigate } from "react-router-dom"
import OptionsList from "./OptionsList"
import Timer from "./Timer"


const Quiz = () => {

    const [index, setIndex] = useState(0)
    const { qns, completionTime } = useContext(QuizContext)
    const [final, setFinal] = useState(false)

    const [time, setTime] = useState(60)

    const counter = () => {
        if (time === 0) {
            submit()
            return
        }
        setTime(prev => prev - 1)
    }


    const navigate = useNavigate()

    useEffect(() => {
        if (index === qns.length - 1) {
            setFinal(true)
        }
    }, [index, qns.length])

    const next = () => {
        // options = []
        setIndex(prev => prev + 1)

    }

    const submit = () => {
        completionTime(time)
        navigate("/result")
    }



    return (
        <div className="quiz">
            <Timer time={time} counter={counter} />
            <h2>Q{index + 1}. {qns[index].question}</h2>

            <OptionsList index={index} />


            {final ? <button onClick={submit}>Submit</button> : <button onClick={next}>Next</button>}
        </div>
    )
}

export default Quiz