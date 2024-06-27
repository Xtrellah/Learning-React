import Navlink from "../Navlink"
import './index.css';

function Nav() {

    let linkvar = ""
    
    return (
        <nav>
            <ul>
                <li><Navlink link={linkvar} text="Home" /></li>
                <li><Navlink link={linkvar} text="Here" /></li>
                <li><Navlink link={linkvar} text="There" /></li>
                <li><Navlink link={linkvar} text="Everywhere" /></li>
                <li className="login"><Navlink  link={linkvar} text="Login" /></li>
            </ul>
        </nav>
    )
}

export default Nav