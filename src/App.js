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
                    <Route path = '/dialogs' render={() => <Dialogs dialogsData={props.appState.messagesPage.dialogsData} messagesData={props.appState.messagesPage.messagesData}/>}/>
                    <Route path = '/profile' render={() => <Profile postsData={props.appState.profilePage.postsData}/>}/>
                    <Route path = '/news' render={() => <News />}/>
                    <Route path = '/music' render={() => <Music />}/>
                    <Route path = '/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
