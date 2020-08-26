import {usersAPI} from "../api/api";
import {updateObjectInArrays} from "../utils/objectsHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHINGG';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArrays(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArrays(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccessAC = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccessAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersTC = (currentPage, pageSize) => {//ThunkCreator budu oboznachat' kak TC
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId));
};

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiMethod, followSuccessAC);
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccessAC);
    }
};

export default usersReducer;