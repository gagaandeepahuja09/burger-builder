import React, {Component} from 'react';
import la from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
//import Auxi from '../../hoc/Auxi';

class Layout extends Component {

	state = {
		showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
		this.setState({	showSideDrawer:false });
	}

	render() {
		return (
			<div>
				<Toolbar />
				<SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
				<div className = {la.Content}>
					{this.props.children}
				</div>
			</div>
			);
	}
}

export default Layout;	