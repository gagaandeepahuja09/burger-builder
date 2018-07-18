import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import cl from './BurgerIngredient.css';
import cl2 from './BurgerIngredient.css';


class BurgerIngredient extends Component {
    render() {
    let ingredient = null;
    switch(this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className = {cl.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = ( <div className = {cl.BreadTop}> 
                            <div className = {cl2.Seeds1}></div>
                            <div className = {cl2.Seeds2}></div>    
                           </div>
            );
            break;
        case ('meat'):
            ingredient = <div className = {cl.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className = {cl.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className = {cl.Bacon}></div>;
            break;
        case ('salad'):
            ingredient = <div className = {cl.Salad}></div>;
            break;
        default: 
            ingredient = null;          
        }
    return ingredient;
    }
}

BurgerIngredient.propTypes =  {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;