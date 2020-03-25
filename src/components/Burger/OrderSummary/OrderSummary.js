import React from 'react';
import Aux from '../../../hoc/AUX';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
            <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger"> CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success"> CONTINUE</Button>
        </Aux>
    )
};


export default orderSummary;