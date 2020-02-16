// import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../Redux/dialogsReducer';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreater())
//                 };
//                 const onNewMessageChange = (msg) => {
//                     store.dispatch(updateNewMessageTextCreater(msg))
//                 };
//                 return <Dialogs
//                     updateNewMessageText={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={store.getState().dialogsPage} />
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