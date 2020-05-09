import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState();
        
            let addPost = () => {
                let action = addPostActionCreator();
                store.dispatch(action);
            }
        
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
        
            }
        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
        } 
    }
    </StoreContext.Consumer>
}

export default MyPostsContainer;