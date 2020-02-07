const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            sendMessage(state);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(state, action.newMessageBody);
            return state;
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