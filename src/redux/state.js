let rerenderEntireTree = () => {
  console.log('state is changed');
};

let state = {

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
    }
};

export const addPost = () => {
    let newPost = {
        id: 15,
        text: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;