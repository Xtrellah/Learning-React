import './index.css';
import Button from "../Button"

function Article({image, title, content}) {
    return (
        <article>
            <img width='300px' src={image} alt="" />
            <h2>{title}</h2>
            <p>{content}</p>
            <Button content='Read more'/>
        </article>
    )
}

export default Article