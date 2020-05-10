import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

//old_Store = OOP

// let rerenderEntireTree = () => {
//     console.log('state is changed')
// }

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let old_Store = {
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
            newMessageText: ''
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscribe(this._state)
    }
};

export default old_Store