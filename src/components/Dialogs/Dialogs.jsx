import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    // ];

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
    const newDialogElement = React.createRef();
    const addDialogElement = () => {
        let text = newDialogElement.current.value;
        alert(text)
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

                {messagesElements}

                {/* <Message text={messagesData[0].message} />
                <Message text={messagesData[1].message} /> */}
                {/* <Message text='Lorem, ipsum dolor.' />
                <Message text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus repudiandae laudantium adipisci laborum accusantium odit sequi, culpa quibusdam.' />
                <Message text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui officia.' />
                <Message text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, qui officia.' /> */}
                <div>
                    <div>
                        <textarea ref={newDialogElement} name="" id="" cols="100" rows="3"></textarea>
                    </div>
                    <div>
                        <button onClick={addDialogElement}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;