import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC} from '../../Redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5642
        }
        this.props.getUserProfileTC(userId);
        // usersAPI.getProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfileAC(response.data)
        //     })
    };

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)
