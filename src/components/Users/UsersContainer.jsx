import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccessAC,
    unfollowSuccessAC,
    setCurrentPageAC,
    toggleFollowingProgressAC, getUsersTC
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersTC(currentPage, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersTC(pageNumber, pageSize);
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

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow: followSuccessAC,
        unfollow: unfollowSuccessAC,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsersTC})
) (UsersContainer)