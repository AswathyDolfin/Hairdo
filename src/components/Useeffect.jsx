import { useEffect, useState } from "react"

function Useeffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)
    })
    const [count1, setCount1] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount1((count1) => count1 + 1)
        }, 1000)
    }, [])
    const [count2, setCount2] = useState(0)
    const [calculation, SetCalculation] = useState(0)
    useEffect(() => {
        SetCalculation(() => count2 * 2);
    }, [count2])
    return (
        <div>
            <h1>i have rendered {count} times!</h1>
            <h1>i have rendered {count1} times!</h1>
            <p>Count:{count2}</p>
            <button onClick={() => setCount2((c) => c + 1)}>+</button>
            <p>Calculatin:{calculation}</p>
        </div>
    )
}
export default Useeffect