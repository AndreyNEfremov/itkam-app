const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMsg
    } else if (action.type === SEND_MESSAGE) {
        let msg = state.newMessageText
        state.newMessageText = '' //зануление строки
        state.messages.push({ id: 6, message: msg }) //пуш в массив
    }

    return state
};

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreater = (msg) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMsg: msg });

export default dialogsReducer;