import { useEffect, useState } from "react"

function BTCtoFreddo() {
    const [price, setPrice] = useState('')

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(priceData => {
                setPrice(priceData.price)
            })
    })

    return (
        <>
            <h2>BTC to Freddo Converter</h2>
            <p>1 BTC = £{price}</p>
        </>
    )
}

export default BTCtoFreddo