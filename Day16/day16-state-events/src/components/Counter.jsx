import { useState } from "react";

    function Counter(){
    const [count , setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    function dicrease(){
        setCount(count -1);
    }

    function reset(){
        setCount(0);
    }
    return(
        <div className="card">
            <h3>Counter</h3>
            <p className="big">{count}</p>
            <div className="row">
                <button onClick={increase}>Increase</button><hr />
                <button onClick={dicrease}>Dicrease</button><hr />
                <button onClick={reset} className="secondary">Reset</button>
            </div>
            <p className="muted"> Normal variables didnt trigger</p>
        </div>
    );
}
export default Counter