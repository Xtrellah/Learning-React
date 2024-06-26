
import Button from "../Button"

function Article({title, content}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button content='Read more'/>
        </article>
    )
}

export default Article