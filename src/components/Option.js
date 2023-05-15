import { useContext } from "react"
import QuizContext from "../store/quiz-context"


const Option = ({ answer, id, select, ind, selected }) => {

    const { addAnswer } = useContext(QuizContext)


    const handleChange = () => {

        select(ind)
        addAnswer(answer, id)
    }

    return (
        <div className={(selected === ind) ? "selected option" : "option"} onClick={handleChange}>
            <span>{answer.id.toUpperCase()}</span>
            <label htmlFor={id + answer.value} >
                {answer.value}
                <input id={id + answer.value} checked={selected === ind} name={id} value={answer.value} type="radio" onChange={handleChange} />
            </label>
        </div>

    )
}

export default Option