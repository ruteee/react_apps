import React from 'react';
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sidenav_items'

const SideNavigation = (props) => {
        return (
            <div>
                <SideNav
                    showNav = {props.showNav}
                    onHideNav= {props.onHideNav}
                    navStyle={{
                        background: 'black',
                        maxWidth: '220px'
                    }}
                >
                    <SideNavItems></SideNavItems>
                </SideNav>
            </div>
        );
}

export default SideNavigation;