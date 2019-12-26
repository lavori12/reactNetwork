import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, text: 'Hello, world', likesCount: 15},
        {id: 1, text: 'My name is Lena', likesCount: 30}
    ];

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <NewPost/>
            <div className={classes.posts}>
                {postsData.map(a => <Post id={a.id} text = {a.text} likesCount = {a.likesCount}/>)}
            </div>
        </div>
    )
};

export default MyPosts;