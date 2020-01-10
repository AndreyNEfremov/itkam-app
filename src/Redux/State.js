//store = OOP

// let rerenderEntireTree = () => {
//     console.log('state is changed')
// }
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    //приватные свойства
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Post One", likesCount: 12 },
                { id: 2, message: "Post Two", likesCount: 5 },
                { id: 3, message: "Post Three", likesCount: 4 },
                { id: 4, message: "Post Four", likesCount: 8 },
                { id: 5, message: "Post Five", likesCount: 2 },
                { id: 6, message: "Post User Six", likesCount: 3 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: 'mstext'
        },
        sidebar: {

        },
    },
    _callSubscribe() {
        console.log('state is changed')
    },
    //методы не меняющие состояние стэйта, технические
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },
    // методы непосредственно работающие и меняющие стэйт
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscribe(this._state)
    },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscribe(this._state)
    // },

    dispatch(action) { //type: 'ADD-POST'
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMsg
            this._callSubscribe(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let msg = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = '' //зануление строки
            this._state.dialogsPage.messages.push({ id: 6, message: msg }) //пуш в массив
            this._callSubscribe(this._state)
        }
    }
};

window.store = store;

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreater = (msg) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMsg: msg });
// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// };

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// };

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// };

export default store