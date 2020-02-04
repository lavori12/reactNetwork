const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        }},
    _callSubscriber(){
        console.log('state is changed');
    },

    addPost(){
        let newPost = {
            id: 15,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    updateNewMessageBody(newText){
        this._state.dialogsPage.newMessageBody = newText;
        this._callSubscriber(this._state);
    },

    sendMessage(){
        let body = {
            id: 15,
            text: this._state.dialogsPage.newMessageBody
        };
        this._state.dialogsPage.messagesData.push(body);
        this._state.dialogsPage.newMessageBody = '';
        this._callSubscriber(this._state);
    },

    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        switch (action.type) {
            case ADD_POST:
                this.addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this.updateNewPostText(action.newPostText);
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this.updateNewMessageBody(action.newMessageBody);
                break;
            case SEND_MESSAGE:
                this.sendMessage();
                break;
            default:
                alert('Unknown type');
        }
    }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newPostText
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyActionCreator = (newMessageBody) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: newMessageBody
    }
};

export default storage;
window.store = storage;