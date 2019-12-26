import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "User One" },
        { id: 2, name: "User Two" },
        { id: 3, name: "User Three" },
        { id: 4, name: "User Four" },
        { id: 5, name: "User Five" },
        { id: 6, name: "User Six" }
    ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    // ];

    let messages = [
        { id: 1, message: "Hi User One" },
        { id: 2, message: "Hellow User Two" },
        { id: 3, message: "Hey User Three" },
        { id: 4, message: "How User Four" },
        { id: 5, message: "Aha User Five" },
        { id: 6, message: "Whatta User Six" }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} />);

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
            </div>
        </div>
    )
};

export default Dialogs;