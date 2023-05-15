import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Timer = () => {
    console.log("timer")

    const [time, setTime] = useState(60)

    const navigate = useNavigate()

    useEffect(() => {
        if (time === 0) {
            navigate("/result")
        }
        setTimeout(() => {
            setTime(prev => prev - 1)
        }, 1000)
    }, [time])

    return (
        <h3 className='timer'>
            Time left : {time}
        </h3>
    )
}

export default Timer