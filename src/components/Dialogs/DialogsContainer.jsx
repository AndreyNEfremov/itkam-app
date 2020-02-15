import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../Redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreater())
                };
                const onNewMessageChange = (msg) => {
                    store.dispatch(updateNewMessageTextCreater(msg))
                };
                return <Dialogs
                    updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;