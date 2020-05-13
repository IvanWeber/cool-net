const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; 

let initialState = {
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
    }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: state.messages.length + 1, 
                message: state.newMessageText, 
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;


    }
}


export const sendMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;