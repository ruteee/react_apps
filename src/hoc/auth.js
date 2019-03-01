
import React from 'react'

const Auth = (props) => {
    const pass = 'senha123'
    
    if(pass !== 'senha123'){
        return(
            <h3>Not auth</h3>
        )

    }else{
        return props.children
    }
}

export default Auth