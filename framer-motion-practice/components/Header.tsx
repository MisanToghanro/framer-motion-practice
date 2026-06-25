
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between px-8 py-4">
     
     <h2>Motion</h2>
  <nav className="gap-8 flex ">
      <Link to="/">Home</Link>{" "}
      <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link>
    </nav>

    </div>

  );
}

export default Navbar;