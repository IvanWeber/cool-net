import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/state';

const MyPosts = (props) => {
    

    let messagesElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        // props.addPost();
        // props.dispatch({type: 'ADD-POST'});
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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
            </div>
        </div>
    )
}

export default MyPosts;