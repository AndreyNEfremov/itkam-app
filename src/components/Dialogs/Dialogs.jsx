import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import { sendMessageCreater, updateNewMessageTextCreater } from '../../Redux/dialogsReducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageText = state.newMessageText;
    
    const onSendMessageClick = () => {
        props.sendMessage()
    };
    const onNewMessageChange = (e) => {
        let msg = e.target.value
        props.updateNewMessageText (msg)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.usersDialogs}>

                {dialogsElements}

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
                {/* <DialogItem name='User Three' id='3' />
                <DialogItem name='User Four' id='4' />
                <DialogItem name='User Five' id='5' />
                <DialogItem name='User Six' id='6' /> */}
            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>

                {/* <Message text={messagesData[0].message} />
                <Message text={messagesData[1].message} /> */}
                {/* <Message text='Lorem, ipsum dolor.' />
                <Message text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repudiandae laudantium adipisci laborum accusantium odit sequi, culpa quibusdam.' />
                <Message text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui officia.' />
                <Message text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui officia.' /> */}
                <div>
                    <div>
                        <textarea value={newMessageText} 
                        placeholder='Enter your message' 
                        onChange={onNewMessageChange}
                        name="" id="" cols="100" rows="3"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;