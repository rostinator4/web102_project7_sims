import { useState } from 'react'
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const [citizen, setCitizen] = useState({ name: "", age: "", avatar: "man" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCitizen(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await supabase
            .from('Citizens') // Updated table name
            .insert(citizen);
        window.location = "/citizens";
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} />

            <label>Age</label>
            <input type="number" name="age" onChange={handleChange} />

            <label>Avatar</label>
            <select name="avatar" onChange={handleChange}>
                <option value="man">👨 Man</option>
                <option value="woman">👩 Woman</option>
                <option value="boy">👦 Boy</option>
                <option value="girl">👧 Girl</option>
                <option value="dog">🐕 Dog</option>
                <option value="cat">🐈 Cat</option>
            </select>
            
            <button type="submit">Invite to City</button>
        </form>
    );
}
export default CreatePost