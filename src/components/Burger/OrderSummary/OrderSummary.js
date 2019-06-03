import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}</li>
    })
    return(
        <Auxillary>
            <h3>Your Order Summary</h3>
            <p>Your delicious burger list</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your Total price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxillary>

    )
}


export default orderSummary;