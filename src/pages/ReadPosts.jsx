import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ReadPosts = () => {
    const [citizens, setCitizens] = useState([])

    useEffect(() => {
        const fetchCitizens = async () => {
            const { data } = await supabase
                .from('Citizens') // Make sure table name matches Supabase
                .select()
                .order('created_at', { ascending: true })
            setCitizens(data)
        }
        fetchCitizens()
    }, [])

    return (
        <div className="ReadPosts">
            {citizens && citizens.length > 0 ? (
                citizens.map((citizen) => (
                    <Card
                        key={citizen.id}
                        id={citizen.id}
                        name={citizen.name}
                        age={citizen.age}
                        avatar={citizen.avatar}
                    />
                ))
            ) : (
                <h2>{'Your city is currently a ghost town. Add some citizens! 👻'}</h2>
            )}
        </div>
    )
}

export default ReadPosts;