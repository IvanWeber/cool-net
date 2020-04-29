import {rerenderEntireTree} from '../render.js';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 1, message: 'It\'s my first post', likesCount: 11},
            {id: 1, message: 'Blabla', likesCount: 11},
            {id: 1, message: 'Dada', likesCount: 11},
        ],
        newPostText: 'it-kamasutra.comaaa'
    },  

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Андрей'}, 
            { id: 2, name: 'Иван'}, 
            { id: 3, name: 'Анна'}, 
            { id: 4, name: 'Сергей'}
          ],
        messages: [
            { id: 1, message: 'Hi'}, 
            { id: 2, message: 'How are you?'}, 
            { id: 3, message: 'Yo yo'}, 
            { id: 4, message: "I'm okay"}
          ]
    },
    
    sidebar: {}
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1, 
        message: state.profilePage.newPostText, 
        likesCount: Math.round(Math.random()*100)
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
    console.log(state.profilePage.newPostText);
};

export default state;