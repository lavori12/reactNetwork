import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const NewPost = (props) => {

    const onPostChange = (event) =>{
        props.dispatch(updateNewPostTextActionCreator(event.target.value));
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
};

export default NewPost;