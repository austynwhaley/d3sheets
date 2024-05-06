import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css';

const Login: React.FC = () => {
    const [signup, setSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');

    const handleSignup = () => {
        setSignUp(!signup);
        // Clear form fields when switching between login and signup
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastName('');
        setUserName('');
    };

    interface NewUser {
        userName: String;
        firstName: String;
        lastName: String;
        email: String;
        password: String;
    }


    const createUser = async () => {
  
        try {
            const newUser: NewUser = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
    
            const response = await axios.post('http://localhost:4000/users', newUser);
            console.log(response);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUser();
        window.location.href = '/';

    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('asdf');
        window.location.href = '/';
    };

    return (
        <div className={`${styles.pageContainer}`}>
            <div className={`loginForm ${styles.loginForm}`}>
                <h1 className='header'>{signup ? 'Sign Up' : 'Login'}</h1>
                <form onSubmit={signup ? handleJoin : handleLogin}>
                    {signup && (
                        <>
                            <div className="row">
                                
                                <div className="col">
                                    <div className={`firstName ${styles.firstName}`}>
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className={`lastName ${styles.lastName}`}>
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col">
                                    <div className={`userName ${styles.userName}`}>
                                        <label>User Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    )}
                    <div className={`email ${styles.email}`}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`password ${styles.password}`}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {signup && (
                        <div className={`confirmPassword ${styles.confirmPassword}`}>
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    )}

                    <Button className={`submit ${styles.submit}`} variant='warning' type='submit'>{!signup ? 'Login' : 'Join'}</Button>
                    
                    <Button className={`signup ${styles.signup} btn btn-primary btn-sm`} variant='primary' onClick={handleSignup}>
                        {!signup ? 'Sign up' : 'Sign in'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
