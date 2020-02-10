import React from 'react';

const NewPost = (props) => {

    const onPostChange = (event) =>{
        props.updateNewPostText(event.target.value);
    };

    const addPost = () => {
        props.addPost();
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