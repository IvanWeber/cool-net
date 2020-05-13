import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../StoreContext";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;