const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

export let store = {
    _state: {
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
                console.log(this._state.profilePage.newPostText);
                console.log(this._state.profilePage);
            }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;
window.store = store;