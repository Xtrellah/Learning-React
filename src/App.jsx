import { useState } from "react"
import Article from "./components/Article"
import Button from "./components/Button"
import Footer from "./components/Footer"
import State from "./components/State"
import Counter from "./components/Counter"
import Character from "./components/Charecter"
import DogPic from "./components/DogPic"


function App() {

    const [num, setNum] = useState(0)
 
    function handleClick() {
        console.log('cllicked')
    }

    function handleCounter() {
      setNum((num) => num + 1)
    } 


    

    return (
        <div>
            <h1>Learning React</h1>
            

            
            <button onClick={handleCounter}>Ive been clicked {num} times!</button>

            <Character />

            <DogPic />

            <Article title='Article 1' content='Some made up content'/>
            <Article title='Article 2' content='Some more made up stuff'/>
            <Article title='Article 3' content='Even more fictional stuff'/>
            <br />
            <Footer />
        </div>
    )
}

export default App