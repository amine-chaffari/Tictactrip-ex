
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './../download.svg';

export default class Header extends Component {
    render() {
        return (
            <AppBar position="relative" style={{backgroundColor:'white',  width:100+'%'}}>
                <Toolbar>
                <img src={logo}  alt="logo" style={{height:50+'px', margin:'auto'}} />
                </Toolbar>
            </AppBar>
        )
    }
}


