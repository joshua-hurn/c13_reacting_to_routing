import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

export default function Navbar() {
    return (
        < nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <div class="container-fluid">
                <Link to="/">
                    <img id="ghibli-logo" src={Logo} alt="Studio Ghibli Logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/films" class="nav-link">Films</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}