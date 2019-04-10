import React from 'react';
import PropTypes from 'prop-types'
import User from './user';

const UserTemplate = (props) => {
    console.log(props)
    return (
        <div>
            Template
        </div>
    );
    
};
UserTemplate.propTypes = {
    name:PropTypes.oneOf(['Rute', 'Yuri']),
    lastname:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['', 'SOuza'])

    ]),
    age:PropTypes.number,
    hobbies:PropTypes.arrayOf(PropTypes.string),
    spanish:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.object,
    mother:function(props, propName, componentName){
        if (props[propName] !== 'Rute'){
            return new Error(`The name ${props[propName]} is incorrect.`)
        }

    }
}
export default UserTemplate;