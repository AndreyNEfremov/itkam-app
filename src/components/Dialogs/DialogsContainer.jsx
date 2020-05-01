import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {sendMessageCreater, updateNewMessageTextCreater} from '../../Redux/dialogsReducer';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (msg) => {
            dispatch(updateNewMessageTextCreater(msg))
        },
        sendMessage: () => {
            dispatch(sendMessageCreater())
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);