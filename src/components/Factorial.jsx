import { useState } from "react"

function Factorial() {
    const [number, setNumber] = useState(0)
    const [fact, setFact] = useState(0)
    function Handlechange(e) {
        console.log(e.target.value);
        setNumber(e.target.value)

    }
    function Find() {
        let f = 1
        for (let i = 1; i <= number; i++) {
            f = f * i
        }
        setFact(f)
    }
    return (
        <div>
            <input type="text" placeholder="enter number" onChange={Handlechange} />
            <button onClick={Find}>find</button>
            <h3>Factorial of {number} is {fact}</h3>
        </div>
    )
}
export default Factorial