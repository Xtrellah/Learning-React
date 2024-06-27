function Navlink({className, link, text}) {

    return (
        <li className={className}><a href={link}>{text}</a></li>
    )
}

export default Navlink