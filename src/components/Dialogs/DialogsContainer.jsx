import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../Redux/dialogsReducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    };
    const onNewMessageChange = (msg) => {
        props.store.dispatch(updateNewMessageTextCreater(msg))
    };

    return (<Dialogs 
    updateNewMessageText={onNewMessageChange}
    sendMessage={onSendMessageClick} 
    dialogsPage={state}/>)
};

export default DialogsContainer;