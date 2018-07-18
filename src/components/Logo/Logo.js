import React from 'react';
import burgerLogo from '../../assets/images/blg.png';
import l from './Logo.css';

const logo = (props) => (
	<div className={l.Logo}>
		<img src={burgerLogo} alt="MyBurger" />
	</div>
);

export default logo;