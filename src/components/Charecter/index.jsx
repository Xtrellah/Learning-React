import { useEffect, useState } from "react"

// useEffect is the only way of making sure that your action (fetch request) only happens once
// Without useEffect, it will happen a bunch of times in a very unpredictable way

// 1) Our component gets mounted
// 2) Once the component is mounted (all set up, state exists etc)
// 3) The useEffect runs and sends the fetch request
// 4) Once the fetch request is done, we update the components state to contain the data we fetched
// 5) React knows that state was updated so it re-renders the component with the updated data 


function Character() {
    const [name, setName] = useState('')
    const [hairColour, setHairColour] = useState('')
    const [birthYear, setBirthYear] = useState('')

    // If you need to perform some action (like a fetch request)
    // straight away, you use useEffect with an empty array as the second param
    useEffect(() => {
        fetch('https://swapi.dev/api/people/1')
            .then(res => res.json())
            .then(characterData => {
                setName(characterData.name)
                setHairColour(characterData.hair_color)
                setBirthYear(characterData.birth_year)
            })
    }, []) // The empty array tells useEffect to do it's job on mount only, never again

    return (
        <>
            <h1>Character</h1>
            <p>{name} has {hairColour} hair and was born in {birthYear}</p>
        </>
    )
}

export default Character