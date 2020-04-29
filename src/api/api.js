import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '72a823d7-94b2-4ecd-891f-657d921d168c'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) { //1 i 10 eto znachenia po defoltu
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                // debugger
                return response.data;
            })
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
};



