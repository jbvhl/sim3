import React from 'react';
import {connect} from 'react-redux';
import {updateUser, clearUser} from './../../ducks/reducer';
import axios from 'axios';

function Nav(props) {
    const logout = async () => {
        await axios.post('/auth/logout');
        props.clearUser();
        props.history.push('/');
    };

    if (props.location.pathname !== '/') {
        return (
            <div>
                <h1>{props.username}</h1>
                <img src={props.img} alt='user'/>
                
                <a href='/dashboard'>
                    <button>Home</button>
                </a>

                <a href='/new'>
                    <button>New Post</button>
                </a>

                    <button onClick={logout}>Logout</button> 
            </div>
        )
    }
    return null;
}

const mapStateToProps = reduxState => {
    return reduxState
}

const mapDispatchedProps = {
    updateUser,
    clearUser
}

export default connect(mapStateToProps, mapDispatchedProps)(Nav);