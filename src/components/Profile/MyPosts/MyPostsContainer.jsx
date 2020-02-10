import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//
//     const onPostChanged = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     };
//
//     return <MyPosts postsData={state.profilePage.postsData} updateNewPostText={onPostChanged} addPost={addPost} newPostText={state.profilePage.newPostText}/>
// };

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;