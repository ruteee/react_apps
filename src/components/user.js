import React from 'react'

import userHoc from '../hoc/userHoc'

const User = () =>{
    return(
        <div>User</div>
    )
}

const User1 = () =>{
    return(
        <div>User1</div>
    )
}

export default userHoc(User, User1,'Hello')