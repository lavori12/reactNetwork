import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.data.postsData}/>
        </div>
    )
};

export default Profile;