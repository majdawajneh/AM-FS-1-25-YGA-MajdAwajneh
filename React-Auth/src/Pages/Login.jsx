import {useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [fname, setfirstName] = useState("");
    const [lname, setlastName] = useState("");
    const [password, setPassword] = useState("");
    const { logIn } = useAuth();
    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();

        if(!fname.trim() || !lname.trim() || !password.trim()) return;

        //fake login for teaching
        logIn(fname.trim() + " " + lname.trim());

        //after login, navigate to profile page
        navigate("/profile"); 
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submit} style={{ display: "grid", maxWidth: 320, gap: 10 }}>
                <input value={fname} onChange={(e) => setfirstName(e.target.value)} placeholder="Enter your first name"/>
                <input value={lname} onChange={(e) => setlastName(e.target.value)} placeholder="Enter your last name"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;