import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            My posts
            <NewPost/>
            <Post/>
            <Post/>
        </div>
    )
};

export default MyPosts;