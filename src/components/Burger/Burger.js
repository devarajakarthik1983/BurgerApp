import React from 'react';
import  classes from './Burger.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = [];
 
    for (let key in props.ingredients) {
        for (let i = 0; i < props.ingredients[key]; i++) {
            //console.log(transformedIngredients);
            transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);

        }
    }

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding the ingredients...</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;