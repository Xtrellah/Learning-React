import { useEffect, useState } from "react"


function DogPic() {
    const [pic, setPic] = useState('')


    useEffect(getDog, [])

    function getDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(picData => {
                setPic(picData.message)
            })
    }

    
    return (
        <div>
            <h2>Random Dog</h2>
            <img src={pic} />
            <button onClick={getDog}>Get new dog</button>
        </div>
    )
}

export default DogPic