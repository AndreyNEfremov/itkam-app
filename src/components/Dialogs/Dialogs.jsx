import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    // debugger
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                      id={dialog.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.usersDialogs}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    )
};

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name='newMessageText' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;