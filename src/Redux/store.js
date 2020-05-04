import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state) ;
    }

};


export default store;
window.store = store;