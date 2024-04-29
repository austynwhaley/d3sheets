import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Login: React.FC = () => {
    return (
        <div className={`${styles.pageContainer}`}>
            <div className={`loginForm ${styles.loginForm}`}>
            <h1 className='header'>Login</h1>
            <form>
                <div className={`email ${styles.email}`}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className={`email ${styles.password}`}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Link to="/">
                    <Button className={`email ${styles.techDesc}`} variant='warning' >Login</Button>
                </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
