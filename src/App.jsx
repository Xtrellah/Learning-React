import { useState } from "react"
import Article from "./components/Article"
import Button from "./components/Button"
import Footer from "./components/Footer"
import State from "./components/State"
import Counter from "./components/Counter"
import Character from "./components/Charecter"
import DogPic from "./components/DogPic"
import BTCtoFreddo from "./components/BTCtoFreddo"
import API from "./components/API"
import Nav from "./components/Nav"
import HomePage from "./components/HomePage"


function App() {

    const [num, setNum] = useState(0)
 
    function handleClick() {
        console.log('cllicked')
    }

    function handleCounter() {
      setNum((num) => num + 1)
    } 

    let cloverClops = "https://preview.redd.it/whos-the-most-forgotten-skylander-and-why-is-it-clover-clops-v0-vwv468tbo4sb1.jpg?width=640&crop=smart&auto=webp&s=16dc2785bb8035d1cd3d337750900ec437e6497a"

    return (
        <div>
            <Nav />

            <HomePage />
            
            <button onClick={handleCounter}>Ive been clicked {num} times!</button>

            <section className="artcont">
                <Article image={cloverClops} title='Clover Clops 1' content='Is he real or just group gaslighting?'/>
                <Article image={cloverClops} title='Clover Clops 2' content='Is he real or just group gaslighting?'/>
                {/* <Article title='Article 3' content='Even more fictional stuff'/> */}
            </section>

            {/* <Character /> */}
            {/* <DogPic /> */}

            {/* <API /> */}

            {/* <BTCtoFreddo /> */}

            

            <br />
            <Footer />
        </div>
    )
}

export default App