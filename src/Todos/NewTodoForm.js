import React, { useState } from 'react'

const NewTodoForm = () =>{
    const [inputValue, setInputValue] = useState('');
    return(
        <div>
            <input type='text'
                    placeholder = "Type your new todo here"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}/>
            <button>Create Todo</button>
        </div>
    )
}

export default NewTodoForm