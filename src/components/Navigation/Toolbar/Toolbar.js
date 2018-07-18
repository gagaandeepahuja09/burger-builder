import React from 'react';
import tb from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
	<header className = {tb.Toolbar}>
		<div>MENU</div>
		<div className = {tb.Logo}><Logo /></div>
		<nav className = {tb.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;