import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';

const MyPosts = (props) => {
    let messagesElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div>
            MyPosts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {messagesElements}
            </div>{console.log(props)}
        </div>
    )
}

export default MyPosts;