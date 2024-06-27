import { useEffect, useState } from "react"


function API() {
    const [id, setId] = useState('')
    const [markethashname, setMarkethashname] = useState('')
    const [pricelatest, setPricelatest] = useState('')


    useEffect(() => {
        fetch('https://www.steamwebapi.com/steam/api/inventory?key=D47J0TUU3MPQFZLK&steam_id=76561198414532849')
            .then(res => res.json())
            .then(Data => {
                let game = Data['0']
                console.log(game)
                setId(game.id)
                setMarkethashname(game.markethashname)
                setPricelatest(game.pricelatest)
            })
    }, [])

    return (
        <>
            <h1>API</h1>
            <p>ID: {id} Name: {markethashname} Price: {pricelatest}</p>
        </>
    )
}

export default API