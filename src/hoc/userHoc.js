import React from 'react'

const userHoc = (WrappedComponent, WrappedComponent1, arg1) => {
    return(props) => (
        <div>
            <WrappedComponent1 {...props}/>
            <WrappedComponent {...props}/>
        </div>

    )

}

export default userHoc