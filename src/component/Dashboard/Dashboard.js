import React, {Component} from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            post: '',
            post_img: ''
        }
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        });
    }

    search() {
        const title = this.state.title
        axios.get('')
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Search' onChange={e => this.handleChange('title', e.target.value)} value={this.state.title}/>
                <button>Search</button>
                <button>Reset</button>
                <input />
                <input />
            </div>
        )
    }
}