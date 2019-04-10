import React, { Component } from 'react';
import UserTemplate from './user_template'

class User extends Component {

    state = {
        name:'Rute',
        lastname:'Abreu',
        age:25,
        hobbies: ['run', 'jump', 'wakeup'],
        spanish:true,
        message(){console.log('hey')},
        car : {'name': 'my car'},
        mother:'Lucia'
    }
    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;