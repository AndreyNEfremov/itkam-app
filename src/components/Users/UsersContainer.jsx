import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccessAC,
    unfollowSuccessAC,
    setCurrentPageAC,
    toggleFollowingProgressAC, getUsersTC
} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.props = null;
    //     this.state = null;
    // };

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    };

    onPageChanged = (pageNumber) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         // debugger
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     })
    };

    render() {
        // debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   // toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow: followSuccessAC,
    unfollow: unfollowSuccessAC,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsersTC})(UsersContainer);