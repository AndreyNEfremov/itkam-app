const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: "User One" },
        { id: 2, name: "User Two" },
        { id: 3, name: "User Three" },
        { id: 4, name: "User Four" },
        { id: 5, name: "User Five" },
        { id: 6, name: "User Six" }
    ],
    messages: [
        { id: 1, message: "Hi User One" },
        { id: 2, message: "Hellow User Two" },
        { id: 3, message: "Hey User Three" },
        { id: 4, message: "How User Four" },
        { id: 5, message: "Aha User Five" },
        { id: 6, message: "Whatta User Six" }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMsg
            };
        case SEND_MESSAGE:
            let msg = state.newMessageText
            return {
                ...state,
                newMessageText: '', //зануление строки
                messages: [...state.messages, { id: 6, message: msg }] //раширение и пуш в массив
            };
        default:
            return state
    };
};

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreater = (msg) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMsg: msg });

export default dialogsReducer;