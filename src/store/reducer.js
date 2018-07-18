import * as at from './actions.js'

const INGREDIENT_PRICES = {
	salad: 0.4,
	cheese: 0.3,
	meat: 1.7,
	bacon: 0.7
}

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		meat: 0,
		cheese: 0,
	},
	totalPrice: 4
};

const reducer = (state=initialState, action) => {
	switch(action.type)
	{
		case at.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName] : state.ingredients[action.ingredientName] + 1
				},
				totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
			};
		case at.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName] : state.ingredients[action.ingredientName] - 1
				},
				totalPrice : state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
			};
		default:
			return state;	
	}
};

export default reducer;