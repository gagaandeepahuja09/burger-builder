import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as at from '../../store/actions';

import Burger from '../../components/ Burger/Burger';
import BuildControls from '../../components/ Burger/BuildControls/BuildControls';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import OrderSummary from '../../components/ Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
	state = {
		purchasing: false,
		loading: false,
		error: false,
	}

	componentDidMount() {
	/*	axios.get('https://react-my-burger-55768.firebaseio.com/ingredients.json')
		.then(response => {
			this.setState({ ingredients: response.data }); })
			.catch(error => { this.setState({ error: true }); });*/
	}

	purchaseHandler = () =>{
		this.setState({ purchasing:true });
	}

	purchaseCancelHandler = () =>{
		this.setState({ purchasing:false });
	}

	purchaseContinueHandler = () =>{
		this.props.history.push('/checkout');
		/*const queryParams = [];
		for(let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');
		this.props.history.push({pathname: '/checkout',
			search: '?' + queryString
		});*/
	}	

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients).map(igKey => { return ingredients[igKey]; })
		.reduce((sum,el) =>{ return sum+el; },0);
		return sum>0;
	}

	render()
	{
		const disabledInfo = {...this.props.ings};
		for(let key in disabledInfo)
		{
			disabledInfo[key] = (disabledInfo[key] <= 0);
		}

		let orderSummary = null; 
		let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

		if(this.props.ings) 
		{
			burger = (<div>
				<Burger ingredients = {this.props.ings}/>
					<BuildControls
					price = {this.props.price} 
					ingredientAdded = {this.props.onIngredientAdded} 
					ingredientRemoved = {this.props.onIngredientRemoved}
					disabled = {disabledInfo}
					purchasable = {this.updatePurchaseState(this.props.ings)}
					ordered = {this.purchaseHandler}
					/>
				</div>);
			orderSummary = (<OrderSummary 
					price = {this.props.price}
					purchaseCancelled = {this.purchaseCancelHandler}
					purchaseContinued = {this.purchaseContinueHandler}
					ingredients = {this.props.ings}/>);	
		}

		if(this.state.loading)
			orderSummary = <Spinner />;

		return (
			<div>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
					{burger}
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.totalPrice
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) =>
		 dispatch({ type: at.ADD_INGREDIENT , ingredientName: ingName }),
		onIngredientRemoved: (ingName) =>
		 dispatch({ type: at.REMOVE_INGREDIENT , ingredientName: ingName }), 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));