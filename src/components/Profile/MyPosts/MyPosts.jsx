import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <NewPost/>
            <div className={classes.posts}>
                <Post text='Hello, world' likesCount='15'/>
                <Post text='My name is Lena' likesCount='30'/>
            </div>
        </div>
    )
};

export default MyPosts;