import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, logOut } = useAuth();

    return (
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>

            {/*Show log in link only if user is not logged in*/}

            {!user && <Link to="/login">Log In</Link>}

            {/*Show log out button only if user is logged in*/}
            {user && <button type='button' onClick={logOut}>Log Out</button>}
        </nav>
    );
}

export default Navbar