import React from 'react';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    const onPostChange = () =>{
        props.updateNewPostText(newPostElement.current.value);
    };

    const addPost = () => {
        props.addPost();
    };

    return (
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
};

export default NewPost;