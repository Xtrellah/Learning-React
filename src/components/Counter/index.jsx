function Counter() {
    
    const [num, setNum] = useState(0)

    function handleCounter() {
        setNum((num) => num + 1)
    } 
    
    return (
        <>
            <button onClick={handleCounter}></button>
            <p>{num}</p>
        </>
    )
}

export default Counter