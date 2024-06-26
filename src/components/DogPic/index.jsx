import { useEffect, useState } from "react"


function DogPic() {
    const [pic, setPic] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(picData => {
                setPic(picData.pic)
            })
    }, [])

    return (
        <>
            <h2>Random Dog</h2>
            <img src={pic} alt="huh" />
        </>
    )
}

export default DogPic