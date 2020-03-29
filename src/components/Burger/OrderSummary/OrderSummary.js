import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    // this could be a functional component, doesn't have to be a class component
    componentDidUpdate(){
        console.log('[Order summary] did update')
    }
    render () {
        const ingredientsummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={this.props.purchaseCancelled} btnType="Danger"> CANCEL</Button>
            <Button clicked={this.props.purchaseContinued} btnType="Success"> CONTINUE</Button>
        </Aux>
        );
    }
};


export default OrderSummary;