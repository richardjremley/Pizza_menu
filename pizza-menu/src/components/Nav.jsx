import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav>
<h4>Navigation</h4>
    <div>
    <Link to="/"> Home </Link>
    <Link to="/MenuCard">Menu</Link>
    </div>
 </nav>
    )
}

export default Nav