const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.dialogsData = [...state.dialogsData];
    stateCopy.messagesData = [...state.messagesData];

    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 15,
                text: state.newMessageBody
            };
            stateCopy.messagesData.push(body);
            stateCopy.newMessageBody = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.newMessageBody;
            return stateCopy;
        default:
            return state;
    }
};

const updateNewMessageBody = (state, newText) => {
    state.newMessageBody = newText;
};

const sendMessage = (state) => {
    let body = {
        id: 15,
        text: state.newMessageBody
    };
    state.messagesData.push(body);
    state.newMessageBody = '';
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

export default dialogsReducer;