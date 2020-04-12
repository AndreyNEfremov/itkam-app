import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };
    // debugger
    return (
        <div>
            <div>
                {pages.map((p, i) => {
                    return <span key={i} className={props.currentPage === p && classes.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}>{p} </span>
                })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : 'https://avavatar.ru/images/avatars/1/avatar_oC4jAgN51kPE3NGP.jpg'} className={classes.userPhoto} alt="" />
                            </NavLink>
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
    )
}

export default Users;