import { useState } from "react"

export const Message =(props)=>{

    const [message, setMessage] = useState('welcome visitor');

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Thank you for Subscribing") }>Subscribe</button>
        </div>
    )
}