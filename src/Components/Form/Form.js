import React, { useState } from 'react';
import "./form.css"
import Rasm from "./img/delbert-pagayona-46v8clmNjY8-unsplash.webp"

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const user = {
            name,
            age: +age
        };
        setData([...data, user]);   
        setName("");
        setAge("");
    };

    const users = data.map((u, index) => (
        <div key={index}>
            <h3>{u.name}</h3>
            <p>{u.age}</p>
        </div>
    ));

    return (
        <div className='conteiner forma'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    // pattern="[A-Za-z]{3}"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                    {/* <input
                        required
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder='18'
                    /> */}
                    <button type='submit'>Add</button>
                </form>
            </div>
            <div>
                {users}
            </div>
        </div>
    );
}

export default Form;
