import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    

    let messages = [
        { id: 1, name: 'Hi, how are you?', likesCount: 0}, 
        { id: 2, name: "It's my first post", likesCount: 23},
        { id: 2, name: "Itasd", likesCount: 25}
    ];

    let messagesElements = messages.map(m => <Post message={m.name} likesCount={m.likesCount} />)

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