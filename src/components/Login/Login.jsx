import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import classes from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} type="text"/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type="text"/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <h1>Login Page</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;