import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Post One", likesCount: 12},
        {id: 2, message: "Post Two", likesCount: 5},
        {id: 3, message: "Post Three", likesCount: 4},
        {id: 4, message: "Post Four", likesCount: 8},
        {id: 5, message: "Post Five", likesCount: 2},
        {id: 6, message: "Post User Six", likesCount: 3}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
};

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});

export const getUserProfileTC = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfileAC(response.data))
};
export const getStatusTC = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response.data))
};

export const updateStatusTC = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
};

export default profileReducer;