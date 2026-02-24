import { useAuth } from '../context/AuthContext';

function Home() {
    const { user } = useAuth();

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome, {user?.fname} {user?.lname}!</p>
        </div>
    );
}

export default Home;