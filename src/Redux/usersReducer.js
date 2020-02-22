const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://avavatar.ru/images/avatars/3/avatar_2ZuL6XVKffLhkSEy.jpg', followed: true, fullName: "Dmitry", status: 'bigBoss', location: { city: 'Minsk', country: 'Belarus' }},
        { id: 2, photoUrl: 'https://avavatar.ru/images/avatars/3/avatar_tjxVEszfBZNdKe7F.jpg', followed: false, fullName: "Taras", status: 'Boss', location: { city: 'Kiev', country: 'Ukraine' }},
        { id: 3, photoUrl: 'https://avavatar.ru/images/avatars/1/avatar_oC4jAgN51kPE3NGP.jpg', followed: false, fullName: "Valddemar", status: 'smallBoss', location: { city: 'Moscow', country: 'Russia' }}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;