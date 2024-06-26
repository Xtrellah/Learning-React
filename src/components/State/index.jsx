import Button from "../Button"
import Counter from "../Counter"

function State({text}) {
    return (
        <>
        <p>{text}</p>
        <Counter text='likes'/>
        </>

    )
}

export default State