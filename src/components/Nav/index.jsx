import Navlink from "../Navlink"
import './index.css';

function Nav() {

    let linkvar = ""
    
    return (
        <nav>
            <ul>
                <Navlink link={linkvar} text="Home" />
                <Navlink link={linkvar} text="Here" />
                <Navlink link={linkvar} text="There" />
                <Navlink link={linkvar} text="Everywhere" />
                <Navlink className="login" link={linkvar} text="Login" />
            </ul>
        </nav>
    )
}

export default Nav