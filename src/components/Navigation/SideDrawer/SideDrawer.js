import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import sd from './SideDrawer.css';

const sideDrawer = (props) => {
	let attachedClass = [sd.SideDrawer, sd.Close];
	if(props.open) {
		attachedClass = [sd.SideDrawer, sd.Open];
	}
	return (
		<div>
			<Backdrop show={props.open} clicked = {props.closed} />
			<div className = {attachedClass.join(' ')}>
				<div className = {sd.Logo}><Logo /></div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</div>
		);
};

export default sideDrawer;