import React from 'react'

const Conditional = () =>{

    // const value = true 

    const returnValue = () =>{
        return true
    }
    return(
        <div>
            {returnValue() ? 
            <div>
                Hello, it's true
            </div>:
            <div>
                Hello it's false
            </div>
            
        }</div>
    )
}

export default Conditional