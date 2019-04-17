import React from 'react'
import { Link } from 'react-router-dom'
import styles from  '../Button/button.css'

const Button = (props) =>{

    let template = null;

    switch(props.type){
        case 'loadMore':
            template = (
                <div className= {styles.blue_btn}
                    onClick = {props.loadMore}
                >
                    { props.cta }
                </div>
            );
            break;
        default:
            template = null;
    }

    return template;

}

export default Button;