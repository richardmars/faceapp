import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Image, FormGroup, FormControl, ControlLabel, HelpBlock, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const host='http://119.23.213.100:5000';
const loginImageUrl = host + '/login.png';

const LogoImage = () => (
    <Image style={{width: "100%", hight: '100%'}} src={loginImageUrl} responsive />
)
const LoginButton = () => (
    <Route render={({ history}) => (
        <Button
            bsStyle="primary" block
            type='button'
            onClick={() => { history.push('/app') }}
        >
            Login Now
        </Button>
    )} />
)

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                
                <div style={{ width: "100%", hight: '100%' }}>
                    <LogoImage />
                </div>
                <div>
                <form>
                    <FormGroup controlId="formBasicText" >
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter your username"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="formPassword" >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <LoginButton />
                </form>
                </div>
            </div>
        );
    }
}

export default Login;
/*
            <div>
                <ul>
                    <li><Link to = "/app">App</Link></li>
                </ul>
            </div>
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                />
                <FieldGroup
                    id="formControlsPassword"
                    label="Password"
                    type="password"
                />
*/
