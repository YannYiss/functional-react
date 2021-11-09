import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick= {() => setCounter(counter + 1)}>Add</button>
                <button onClick= {() => setCounter(counter - 1)}>Substract</button>
            </div>
        </div>
    );
}

export default Counter;