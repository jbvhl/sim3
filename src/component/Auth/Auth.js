import React, {Component} from 'react';
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';
import {connect} from 'react-redux';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this);
    }

    componentDidMount() {
        this.checkUser();
    };

    checkUser = async () => {
        const {id} = this.props;

        if (!id) {
            try {
                let res = await axios.get('/api/current');
                this.props.updateUser(res.data);
                this.props.history.push('/dashboard');
    
            } catch(err) {
            }
        } else {
            this.props.history.push('/dashboard');
        }
    };

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    async register() {
        if(this.state.username === '' || this.state.password === '') {
            return (
                null, 
                alert('Create username & password')
            );
        }
        let user = {
            username: this.state.username,
            password: this.state.password
        };
        try {
            let res = await axios.post('/auth/register', user)
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        } catch(err) {
            console.log(err);
            alert('Unique user required');
        }
    }

    login = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res= await axios.post('/auth/login', user);
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        } catch(err) {
            console.log(err);
            alert('Incorrect user/password')
        }
    }

    render() {
        const {username, password} = this.state;
        return (
            <div>
                <input type='text' placeholder='Username' value={username} onChange={e => this.handleChange('username', e.target.value)}/>
                <input type='password' placeholder='Passsword' value={password} onChange={e => this.handleChange('password', e.target.value)}/>

                <button onClick={this.register}>Register</button>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);