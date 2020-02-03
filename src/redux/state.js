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
                {id: 3, text:'I am fine'}]
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

    getState(){
        return this._state;
    },

    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }

};
export default storage;
window.store = storage;