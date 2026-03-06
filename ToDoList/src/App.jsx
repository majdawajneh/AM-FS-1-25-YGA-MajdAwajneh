import { useRef, useState } from "react";
import './App.css';

export default function ToDoList(){
  const[Goals, setGoals] = useState([]);
  const GoalRef = useRef();

  const AddGoalToList = () =>{
    const text = GoalRef.current.value;
    const newGoal = {completed : false, text};
    setGoals([...Goals,newGoal]);
    GoalRef.current.value = "";
  };

  const Acheivements = ((index) =>{
    const Success = [...Goals];
    Success[index].completed = true;
    setGoals(Success);
  });

  const DeleteAcheievedGoal = ((index) =>{
    const DeleteGoal = [...Goals]
    DeleteGoal.splice(index);
    setGoals(DeleteGoal);
  })

  return(
    <div className="newapp">
      <h1>List By React</h1>
      <div className="main">
        <h2>Lists Here ..!</h2>
        <div className="container">
          <ul>
            {Goals.map(({text, completed},index) =>{
              return(
                <div className="items">
                  <li className={completed ? "Done" : ""} key={index} onClick={() => Acheivements(index)}>{text}</li>
                  <span onClick={DeleteAcheievedGoal}>❎</span>
                </div>
              )
            })}
            
          </ul>
          <input type="text" placeholder="Type Your Goal Here..." ref={GoalRef}/>
          <button onClick={AddGoalToList}>Add To List</button>
        </div>
      </div>
    </div>
  );
}