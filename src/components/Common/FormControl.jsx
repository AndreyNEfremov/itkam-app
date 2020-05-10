import React from "react";
import classes from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}> {/*pokazhi has error esli est' ili pokazhi pustotu*/}
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>} {/*esli touched i esli error net texta togda pokazhi oshibku*/}
            </div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}> {/*pokazhi has error esli est' ili pokazhi pustotu*/}
            <div>
                <input {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>} {/*esli touched i esli error net texta togda pokazhi oshibku*/}
            </div>
        </div>
    )
};