import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let messagesElements = props.posts.map(m => <Post message={m.message} likesCount={m.likesCount} />)

    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {messagesElements}
            </div>
        </div>
    )
}

export default MyPosts;