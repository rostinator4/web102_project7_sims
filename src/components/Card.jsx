import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) => {
    const avatarMap = {
        man: "👨",
        woman: "👩",
        boy: "👦",
        girl: "👧",
        dog: "🐕",
        cat: "🐈"
    };

    return (
        <div className="Card">
            <Link to={'/edit/' + props.id}>
                <img className="moreButton" alt="edit" src={more} />
            </Link>
            <div style={{ fontSize: "50px" }}>
                {avatarMap[props.avatar] || "👤"}
            </div>
            <h2 className="title">{props.name}</h2>
            <p><strong>Age:</strong> {props.age}</p>
            <p className="description">Type: {props.avatar}</p>
        </div>
    );
};

export default Card