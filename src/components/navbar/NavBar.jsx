import {Link} from 'react-router-dom';
import "./NavBar.css";

function NavBar(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/tours">Tours</Link>
            {/* <Link to="/contact"> Contact</Link> */}
        </nav>
    )
}

export default NavBar;