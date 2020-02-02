import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path = '/dialogs' render={() => <Dialogs data={props.appState.dialogsPage}/>}/>
                    <Route path = '/profile' render={() => <Profile data={props.appState.profilePage} addPost={props.addPost} updateNewPostText = {props.updateNewPostText}/>}/>
                    <Route path = '/news' render={() => <News />}/>
                    <Route path = '/music' render={() => <Music />}/>
                    <Route path = '/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
