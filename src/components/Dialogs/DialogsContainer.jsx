import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {sendMessageCreater} from '../../redux/dialogsReducer';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreater(newMessageText))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);