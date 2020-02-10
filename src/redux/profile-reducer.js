const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, text: 'Hello, world', likesCount: 15},
        {id: 2, text: 'My name is Lena', likesCount: 30}],
    newPostText: 'Hello my friend!'
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.postsData = [...state.postsData];

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 15,
                text: state.newPostText,
                likesCount: 0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText='';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
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
    let stateCopy = {...state};
    stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push(newPost);
    stateCopy.newPostText='';
    return stateCopy;
};

const updateNewPostText = (state, newText) => {
    let stateCopy = {...state};
    stateCopy.newPostText = newText;
    return stateCopy;
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