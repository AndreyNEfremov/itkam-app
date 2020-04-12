// import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../Redux/dialogsReducer';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(old_Store) => {
//                 let state = old_Store.getState().dialogsPage;
//                 const onSendMessageClick = () => {
//                     old_Store.dispatch(sendMessageCreater())
//                 };
//                 const onNewMessageChange = (msg) => {
//                     old_Store.dispatch(updateNewMessageTextCreater(msg))
//                 };
//                 return <Dialogs
//                     updateNewMessageText={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={old_Store.getState().dialogsPage} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;