import './index.css';

import Button from "../Button"
import Navlink from "../Navlink"

function Footer() {
    return (
        <footer>
            <h2>Clover Clops inc.</h2>
            <div>
                <Button content="Sign up to our newsletter" />
                <div className='footlinks'>
                    <Navlink text="Join CCI" />
                    <Navlink text="Click for a secret" />
                </div>
            </div>
            <p>Clover Clops &copy; Copyright 2024</p>
        </footer>
    )
}

export default Footer