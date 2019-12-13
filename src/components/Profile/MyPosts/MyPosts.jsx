import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            My posts
            <NewPost/>
            <Post text = 'Hello, world' likesCount ='15'/>
            <Post text = 'My name is Lena' likesCount='30'/>
        </div>
    )
};

export default MyPosts;