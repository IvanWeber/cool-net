const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; 

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
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
              ],
              newMessageText: 'it-kamasutra-dialogs'
        },
        
        sidebar: {}
    },
    _callSubscriber () {
        console.log('State changed');
    }, 

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
            if (action.type === ADD_POST) {
                let newPost = {
                    id: this._state.profilePage.posts.length + 1, 
                    message: this._state.profilePage.newPostText, 
                    likesCount: Math.round(Math.random()*100)
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            } else if (action.type === ADD_MESSAGE) {
                let newMessage = {
                    id: this._state.dialogsPage.messages.length + 1, 
                    message: this._state.dialogsPage.newMessageText, 
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
            } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);        
            }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default store;
window.store = store;