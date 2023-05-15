import { useState } from "react"
import QuizContext from "./quiz-context"

const qns = [
    {
        id: 1,
        question: "Who created Javascript?",
        answers: [
            {
                id: "a",
                value: "Brendan Eich",
                correct: true
            },
            {
                id: "b",
                value: "Guido van Rossum",
                correct: false
            },
            {
                id: "c",
                value: "Bill Gates",
                correct: false
            },
            {
                id: "d",
                value: "Steve Wozniak",
                correct: false
            },
        ]
    },
    {
        id: 2,
        question: "What year was javascript created?",
        answers: [
            {
                id: "a",
                value: "1998",
                correct: false
            },
            {
                id: "b",
                value: "1963",
                correct: false
            },
            {
                id: "c",
                value: "1995",
                correct: true
            },
            {
                id: "d",
                value: "2001",
                correct: false
            },
        ]
    },
    {
        id: 3,
        question: "Which of the following is a javascript framework/library?",
        answers: [
            {
                id: "a",
                value: "Laravel",
                correct: false
            },
            {
                id: "b",
                value: "React",
                correct: true
            },
            {
                id: "c",
                value: "Django",
                correct: false
            },
            {
                id: "d",
                value: "Flutter",
                correct: false
            },
        ]
    },
    {
        id: 4,
        question: "When was ES6 released?",
        answers: [
            {
                id: "a",
                value: "2018",
                correct: false
            },
            {
                id: "b",
                value: "2016",
                correct: false
            },
            {
                id: "c",
                value: "2006",
                correct: false
            },
            {
                id: "d",
                value: "2015",
                correct: true
            },
        ]
    },
    {
        id: 5,
        question: "Who created React?",
        answers: [
            {
                id: "a",
                value: "Jordan Walke",
                correct: true
            },
            {
                id: "b",
                value: "Adam Abrons",
                correct: false
            },
            {
                id: "c",
                value: "Misko Hevery",
                correct: false
            },
            {
                id: "d",
                value: "Evan You",
                correct: false
            },
        ]
    }
]


const QuizContextProvider = ({ children }) => {

    const [answers, setAnswers] = useState([])
    const [timeTaken, setTimeTaken] = useState()

    const completionTime = (time) => {
        setTimeTaken(60 - time)
    }

    const addAnswer = (ans, id) => {
        let existing = answers.find(ans => ans.qId === id)
        if (existing) {
            existing = { qId: id, ...ans }
        } else {
            setAnswers(prev => [...prev, { qId: id, ...ans }])
        }

    }

    const score = answers.filter(ans => ans.correct === true).length

    const reset = () => {
        setAnswers([])
        setTimeTaken()
    }
    // console.log(answers)
    // console.log(score)

    const data = {
        qns,
        addAnswer,
        score: score,
        reset,
        timeTaken: timeTaken,
        completionTime
    }

    return (
        <QuizContext.Provider value={data}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider