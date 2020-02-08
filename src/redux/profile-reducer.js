const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, text: 'Hello, world', likesCount: 15},
        {id: 2, text: 'My name is Lena', likesCount: 30}],
    newPostText: 'Hello my friend!'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            addPost(state);
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(state, action.newPostText);
            return state;
        default:
            return state;

    }
};


const addPost = (state) => {
    let newPost = {
        id: 15,
        text: state.newPostText,
        likesCount: 0
    };
    state.postsData.push(newPost);
    state.newPostText = '';
};

const updateNewPostText = (state, newText) => {
    state.newPostText = newText;
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

export default profileReducer;