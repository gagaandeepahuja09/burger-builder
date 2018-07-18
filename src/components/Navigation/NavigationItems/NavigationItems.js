import React from 'react';
import nis from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className = {nis.NavigationItems}> 
		<NavigationItem link = "/">Burger Builder</NavigationItem>
		<NavigationItem link = "/orders">Orders</NavigationItem>
	</ul>
);

export default navigationItems;