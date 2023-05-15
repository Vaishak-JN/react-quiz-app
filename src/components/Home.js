import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [showRules, setShowRules] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="home">
            <h1>Lets see how well you know javascript.</h1>


            {showRules ?
                <>
                    <h3>Rules</h3>
                    <ol>
                        <li>You will have 1 minute to complete the quiz</li>
                        <li>You cannot re-submit answers</li>
                    </ol>
                    <button onClick={() => navigate("/quiz")}>Start</button>
                </>
                :
                <button onClick={() => setShowRules(!showRules)} >Start Quiz</button>
            }
        </div>
    )
}

export default Home