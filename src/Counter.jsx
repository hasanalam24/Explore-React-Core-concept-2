import { useState } from "react"

export default function Counter() {


    // const abc = useState(50);
    const [count, setCount] = useState(0);
    // console.log(abc)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (

        <div style={{ border: '2px solid blue' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>

            <button onClick={handleReduce}>Reduce</button>
        </div>
    )

}