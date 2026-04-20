import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

const EditPost = () => {
    const { id } = useParams()
    const [citizen, setCitizen] = useState({ name: "", age: "", avatar: "man" })

    useEffect(() => {
        const fetchCitizen = async () => {
            const { data } = await supabase
                .from('Citizens')
                .select()
                .eq('id', id)
                .single()
            setCitizen(data)
        }
        fetchCitizen()
    }, [id])

    const updateCitizen = async (event) => {
        event.preventDefault()
        await supabase
            .from('Citizens')
            .update({ name: citizen.name, age: citizen.age, avatar: citizen.avatar })
            .eq('id', id)
        window.location = "/citizens"
    }

    const deleteCitizen = async (event) => {
        event.preventDefault()
        await supabase.from('Citizens').delete().eq('id', id)
        window.location = "/citizens"
    }

    const handleChange = (e) => {
        setCitizen(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div>
            <form onSubmit={updateCitizen}>
                <label>Name</label><br />
                <input type="text" name="name" value={citizen.name} onChange={handleChange} /><br />

                <label>Age</label><br />
                <input type="number" name="age" value={citizen.age} onChange={handleChange} /><br />

                <label>Avatar</label><br />
                <select name="avatar" value={citizen.avatar} onChange={handleChange}>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select><br />

                <input type="submit" value="Update Citizen" />
                <button className="deleteButton" onClick={deleteCitizen}>Remove from City</button>
            </form>
        </div>
    )
}

export default EditPost;