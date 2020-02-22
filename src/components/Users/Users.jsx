import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {
        // props.setUsers(
        //     [
        //         { id: 1, photoUrl: 'https://avavatar.ru/images/avatars/3/avatar_2ZuL6XVKffLhkSEy.jpg', followed: true, fullName: "Dmitry", status: 'bigBoss', location: { city: 'Minsk', country: 'Belarus' } },
        //         { id: 2, photoUrl: 'https://avavatar.ru/images/avatars/3/avatar_tjxVEszfBZNdKe7F.jpg', followed: false, fullName: "Taras", status: 'Boss', location: { city: 'Kiev', country: 'Ukraine' } },
        //         { id: 3, photoUrl: 'https://avavatar.ru/images/avatars/1/avatar_oC4jAgN51kPE3NGP.jpg', followed: false, fullName: "Valddemar", status: 'smallBoss', location: { city: 'Moscow', country: 'Russia' } }
        //     ]
        // );
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    };

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : 'https://avavatar.ru/images/avatars/1/avatar_oC4jAgN51kPE3NGP.jpg'} className={classes.userPhoto} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {<div>{'u.location.country'}</div> /*в кавычки чтобы не парсился и не искался в апи объект, но чтобы помнили, что он нам нужен */}
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;