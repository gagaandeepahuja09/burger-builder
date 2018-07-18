import React from 'react';
import ni from './NavigationItem.css';
import { NavLink } from 'react-router-dom'; 

const navigationItem = (props) => (
	<li className = {ni.NavigationItem}>
	<NavLink to = {props.link}
	exact = {props.active} 
	activeClassName = {ni.active}> 
		{props.children}
	</NavLink></li>
);

export default navigationItem;