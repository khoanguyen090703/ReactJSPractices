import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [state, setState] = useState({
        username: 'Dang Khoa'
    });

    return (
        <div>
            <nav id='navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <div className="nav-details">
                    <p className="nav-username">{state.username}</p>
                </div>
            </nav>
            <button onClick={() => setState({username: 'Guest'})}>Logout</button>
        </div>
    );
}