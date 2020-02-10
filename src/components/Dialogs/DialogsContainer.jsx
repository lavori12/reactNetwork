import { sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     const onBodyChange = (text) => {
//         props.store.dispatch(updateNewMessageBodyActionCreator(text));
//     };
//
//     const sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     };
//
//
//     return <Dialogs updateNewMessageBody={onBodyChange} sendMessage={sendMessage} dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}
//                     newMessageBody={state.dialogsPage.newMessageBody}/>
// };

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {dispatch(updateNewMessageBodyActionCreator(text))},
        sendMessage: () => {dispatch(sendMessageActionCreator())}
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;