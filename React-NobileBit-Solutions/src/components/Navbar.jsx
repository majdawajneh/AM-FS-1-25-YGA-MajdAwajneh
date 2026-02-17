import { Link } from "react-router-dom";

function Navbar() {
return (
    <nav className = "text-center  font-bold" style={{ background: "#bdbbbb", padding: "10px" }}>
    {/* Use Link instead of <a> to avoid full page reload */}

    <Link to="/" style={{ marginRight: "10px", padding: "5px" }}>Home</Link>

    <Link to="/about" style={{ marginRight: "10px", padding: "5px" }}>About</Link>

    <Link to="/profile" style={{ padding: "5px" }}>Profile</Link>

    </nav>
);
}

export default Navbar;