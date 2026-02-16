import { useState } from "react";

function LoginForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    function FirstNameChange(event){
        setFirstName(event.target.value);
    }
    function LastNameChange(event){
        setLastName(event.target.value);
    }
    function PasswordChange(event){
        setPassword(event.target.value);
    }
    function AgeIncrease(age){
        setAge(age + 1);
    }
    function AgeDecrease(age){
        setAge(age - 1);
    }
    function Resetall(){
        setFirstName("");
        setLastName("");
        setPassword("");
        setPhone("");
        setAge(0);
        setGender("");
    }
    function GenderChange(gender){
        setGender(gender);
    }
    function Submit(event){
        event.preventDefault();
        console.log(`Welcome "${firstName} ${lastName}" with password "${password}" and phone "${phone}" and age "${age}" and gender "${gender}"`);
    }
    return(
        <div className="LoginForm">
            <h3 style={{color : "#ce3333"}}>Login Form</h3><hr />
            <form onSubmit={Submit}>
                <input type="text" placeholder="Username" value={firstName} onChange={FirstNameChange} style={{padding: "15px", fontSize: "16px", margin: "10px", backgroundColor : "#f0f0f0", borderRadius : "20px",boxShadow : "0 1px 15px rgba(238, 44, 44, 0.6)", color:"black"}}/>
                <input type="text" placeholder="Last Name" value={lastName} onChange={LastNameChange} style={{padding: "15px", fontSize: "16px",margin : "10px",backgroundColor : "#f0f0f0", borderRadius : "20px",boxShadow : "0 1px 15px rgba(238, 44, 44, 0.6)", color:"black"}}/><br/>
                <input type="password" placeholder="Password" value={password} onChange={PasswordChange} style={{padding : "15px", margin : "10px", fontSize: "16px",backgroundColor : "#f0f0f0", borderRadius : "20px",boxShadow : "0 1px 15px rgba(238, 44, 44, 0.6)", color:"black"}}/>
                <input type="text" placeholder="Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} style={{padding : "15px", margin : "10px", fontSize: "16px", backgroundColor : "#f0f0f0", borderRadius : "20px",boxShadow : "0 1px 15px rgba(238, 44, 44, 0.6)", color:"black"}}/><br/>
                <input type="radio" name="gender" value="male" onChange={GenderChange} style={{margin : "10px"}}/> Male
                <input type="radio" name="gender" value="female" onChange={GenderChange} style={{margin : "10px"}}/> Female <br />
                <p>Age: {age}</p>
                <button onClick={AgeIncrease} style={{color:"white", backgroundColor : "#ce3333", borderRadius : "20px",boxShadow : "0 1px 10px rgba(238, 44, 44, 0.6)"}}>Age +</button><br />
                <button onClick={AgeDecrease} style={{color:"white", backgroundColor : "#ce3333", borderRadius : "20px",boxShadow : "0 1px 10px rgba(238, 44, 44, 0.6)"}}>Age -</button><br />
                <button onClick={Resetall} style={{color:"white", backgroundColor : "#ce3333", borderRadius : "20px",boxShadow : "0 1px 10px rgba(238, 44, 44, 0.6)"}}>Reset All</button><br />
                <button type="submit" onClick={Submit} style={{color:"white", backgroundColor : "#ce3333", borderRadius : "20px",boxShadow : "0 1px 10px rgba(238, 44, 44, 0.6)"}}>Login</button>
            </form>
        </div>
    );
}
export default LoginForm