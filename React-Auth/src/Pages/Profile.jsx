import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user } = useAuth();

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Name: {user?.fname} {user?.lname}</p>
        </div>
    );
}

export default Profile;