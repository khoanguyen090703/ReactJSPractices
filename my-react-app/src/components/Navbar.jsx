import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
    const [state, setState] = useState({
        username: 'Dang Khoa'
    });

    return (
        <div>
            <nav id='navbar'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>About</li></a>
                </ul>

                <div className="nav-details">
                    <p className="nav-username">{state.username}</p>
                </div>
            </nav>
            <button onClick={() => setState({username: 'Guest'})}>Logout</button>
        </div>
    );
}