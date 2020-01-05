let rerenderEntireTree = () => {
    console.log('state is changed')
}

let state = {
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
        ]
    },
    sidebar: {

    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer 
};

export default state