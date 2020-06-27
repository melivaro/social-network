import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={"header"}>
                <img src="https://svgsilh.com/svg/156859.svg" alt=""/>
            </header>
            <nav className={"navigation"}>
                <ul>
                    <li>Profile</li>
                    <li>Message</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className={"content"}>
                <div>
                    <img src="https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
