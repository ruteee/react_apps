import  React from 'react'
import  ReactDOM from 'react-dom'

import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

//Components
import Home from './components/home'
import Posts from './components/posts'
import Profiles from './components/profiles'
import PostItem from './components/post_item'
import NotFound from './components/404'
import Life from './components/life'
import Conditional from './components/conditional'
import User from './components/user'
const App = () =>{
    return (
        <BrowserRouter>
        <div>
            <header>
                <NavLink to ='/'>Home</NavLink><br/>
                <NavLink 
                    to ='/posts'
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                
                
                >Posts</NavLink><br/>
                <NavLink to = {{
                    pathname:'/profile',
                    hash:   '#root',
                    search: '?profile=true'
                }}>Profile </NavLink><br/>
                <NavLink to='/life'> Life</NavLink><br/>
                <NavLink to='/conditional'> Conditional</NavLink><br/>
                <NavLink to='/user'> User</NavLink><br/>
                <hr/>
            </header>
            <Switch>
                {/* <Redirect from="/profile" to='/home'/> */}
                <Route path="/posts/:id" component={PostItem}/>                
                <Route path ="/profile" component={Profiles}/>
                <Route path="/posts"  component={Posts}/>
                <Route path= "/life" component={Life}/>
                <Route path= "/conditional" component={Conditional}/>
                <Route path= "/user" component={User}/>
                <Route path = "/"  exact component={Home}/>
                {/* <Route render = {() => <h3>oops 404</h3>}/> */}
                <Route component ={NotFound}/>
            </Switch>
            
        </div>
       </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)