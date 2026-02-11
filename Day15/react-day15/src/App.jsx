import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="">
                  <img src="htmlogo.png" className="logo" alt="" />
                </a>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <div className='cards'>
              <Card FirstName={"Majd"} LastName={"Al-Awajneh"} Age={"22-YO"} Major={"Software Engineering"}/>
              <Card FirstName={"Majd"} LastName={"Al-Awajneh"} Age={"22-YO"} Major={"Software Engineering"}/>
              <Card FirstName={"Majd"} LastName={"Al-Awajneh"} Age={"22-YO"} Major={"Software Engineering"}/>
              <Card FirstName={"Majd"} LastName={"Al-Awajneh"} Age={"22-YO"} Major={"Software Engineering"} style= {{boxShadow: '2px 1px 4px 3px rgb(24, 0, 243)'}}/>
              
            </div>
            <Card title="Majd al awajneh" description="A JavaScript library for building user interfaces"/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App