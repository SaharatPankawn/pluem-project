import React from "react";
import {NavLink, BrowserRouter} from 'react-router-dom'
import './navlink.css';

export default function Router2() {
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/' className={({isAactive})=>
                isAactive?"active_menu":"menu"}
                style={({isAactive})=> {
                    return {
                        fontWeight: isAactive ? "bold" : ""
                    };
                }}>Home</NavLink> -&nbsp;
                <NavLink to ='Product' className={({isAactive})=>isAactive?"active_menu":"menu"}>
                    Product</NavLink> -&nbsp;
                <NavLink to ='Member'  className={({isAactive})=>isAactive?"active_menu":"menu"}>
                    Member</NavLink> -&nbsp;
                <NavLink to ='Contact' className={({isAactive})=>isAactive?"active_menu":"menu"}>
                    Contact</NavLink> 
            </nav>
        </BrowserRouter>
    )
}