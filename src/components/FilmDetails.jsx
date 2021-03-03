import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

export default function FilmDetails() {
    const [film, setFilm] = useState(null);
    const { filmid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
            .catch(err => console.error(err));
    }, []);

    

    return (
        <>
            <h1 className="text-center mb-3">Films</h1>
            <div className="container">
                <div className="row justify-content-around">
                    <div key={film?.id} className="card my-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{film?.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{film?.director}</h6>
                            <p className="card-text">{film?.description}</p>
                            <a href={`https://ghibliapi.herokuapp.com/films/${film?.id}`} className="card-link">
                                <button className="btn btn-sm btn-primary">See JSON Data</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

