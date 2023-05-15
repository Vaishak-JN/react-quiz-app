import Option from "./Option"
import { useContext, useState, useEffect } from "react"
import QuizContext from "../store/quiz-context"
import Timer from "./Timer"


const OptionsList = ({ index }) => {

    const { qns } = useContext(QuizContext)

    const [selected, setSelected] = useState()

    useEffect(() => {
        setSelected(null)
    }, [index])

    // console.log(index)

    const select = (ind) => {
        setSelected(ind)
    }

    const content = qns[index].answers.map((answer, i) => <Option key={answer.id} selected={selected} select={select} ind={i} answer={answer} id={qns[index].id} />)

    return (


        <div className="optionsList">

            {content}
        </div>

    )
}

export default OptionsList