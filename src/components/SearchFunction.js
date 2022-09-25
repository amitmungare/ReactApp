import NAMES from './data.json'
import { useState, useTransition } from 'react'

export const Search =()=>{

    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('')
    const [ispending, startTransition] = useTransition()

    const changeHandler = (e) =>{
        setInputValue(e.target.value)
        startTransition(() =>setQuery(e.target.value))
    }

    const filteredNames = NAMES.filter((item) =>{
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

    return(
        <div>
            <input type='text' value={inputValue} onChange={changeHandler} />
            {ispending && <p>Updating list...</p>}
            {
                filteredNames.map((item)=>(
                    <p key={item.id}>
                        {item.first_name} {item.last_name}
                    </p>
                ))
            }
        </div>
    )
}