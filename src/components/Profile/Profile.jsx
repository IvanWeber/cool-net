import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg'></img>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;