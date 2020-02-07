import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let storage = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: 'Hello, world', likesCount: 15},
                {id: 2, text: 'My name is Lena', likesCount: 30}],
            newPostText: 'Hello my friend!'
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Kseniia'},
                {id: 2, name: 'Nikita'},
                {id: 3, name: 'Natalia'},
                {id: 4, name: 'Tatiana'},
                {id: 5, name: 'Anna'},
                {id: 6, name: 'Maria'}],

            messagesData : [
                {id: 1, text:'Hi'},
                {id: 2, text:'How are you?'},
                {id: 3, text:'I am fine'}],

            newMessageBody: ''
        },

        sidebar: {}},

    _callSubscriber(){
        console.log('state is changed');
    },

    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer();
        this._callSubscriber(this._state);
    }

};

export default storage;
window.store = storage;