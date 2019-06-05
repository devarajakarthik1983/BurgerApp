import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToogleClicked}/>
        <div className={classes.Logo}>
        <Logo />
           </div> 
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
)

export default toolbar;