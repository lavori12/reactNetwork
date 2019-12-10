import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
