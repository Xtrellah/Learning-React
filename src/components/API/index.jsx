import { useEffect, useState } from "react"
import Counter from "../Counter"


function API() {
    const [image, setImage] = useState('')
    const [id, setId] = useState('')
    const [markethashname, setMarkethashname] = useState('')
    const [pricelatest, setPricelatest] = useState('')
    
    const [num, setNum] = useState(0)

    function handleCounter() {
            setNum((num) => num + 1)

            
        }   

        useEffect(getData, [])
        
    function getData() {
        fetch('https://www.steamwebapi.com/steam/api/inventory?key=D47J0TUU3MPQFZLK&steam_id=76561198414532849')
            .then(res => res.json())
            .then(Data => {
                let game = Data[num]
                console.log(game)
                setImage(game.image)
                setId(game.id)
                setMarkethashname(game.markethashname)
                setPricelatest(game.pricelatest)
            })
    }

    return (
        <section className="steam-api">
            <h1>API</h1>
            <img width='300px' src={image}/>
            <p>ID: {id}</p>
            <p>Name: {markethashname}</p>
            <p>Price: {pricelatest}</p>

            <button onClick={handleCounter}>Item: {num}</button>
            <button onClick={getData}>refresh</button>
        </section>
    )
}

export default API