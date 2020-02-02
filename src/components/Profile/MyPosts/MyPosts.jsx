import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <NewPost  addPost={props.addPost} newPostText={props.newPostText} updateNewPostText = {props.updateNewPostText}/>
            <div className={classes.posts}>
                {props.postsData.map(a => <Post key={a.id} id={a.id} text = {a.text} likesCount = {a.likesCount}/>)}
            </div>
        </div>
    )
};

export default MyPosts;