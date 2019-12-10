import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img alt=" " src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"/>
            post 1
            <div>
                <span>like </span>
                <span> dislike</span>
            </div>
        </div>
    )
};

export default Post;