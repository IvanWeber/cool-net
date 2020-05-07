import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';

const MyPosts = (props) => {
    let messagesElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)

    let newPostElement = React.createRef();

    let onAddButtonClick  = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div>
            MyPosts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={onAddButtonClick}>Add post</button>
            </div>
            <div className={s.posts}>
                {messagesElements}
            </div>{console.log(props)}
        </div>
    )
}

export default MyPosts;