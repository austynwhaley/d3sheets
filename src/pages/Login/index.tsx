import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/index.css';
import Button from 'react-bootstrap/Button';

const Login = () => {
    return(
        <div className="container d-flex justify-content-lg-center">
      <div className="header">

        <h1 className='header'>Login</h1>
                <div className='login'>
                    <div className='bio'>
                        <h4 className='email'>Email</h4>
                        <input></input>
                    </div>
                    <div className='password'>
                        <h5>Password</h5>
                        <input></input>
                    </div>
                    <div className='techDesc'>
                        <Button className='customDesc' variant='warning' >Login</Button>
                    </div>
                </div>
      </div>
    </div>
    )
}

export default Login;
