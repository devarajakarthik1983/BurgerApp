import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../../Burger/BuildControls/BuildControl/BuildControl';


const controls =[
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(cntrl =>(
            <BuildControl key={cntrl.label} label={cntrl.type} added={()=>props.ingredientAdded(cntrl.type)} 
            removed={()=>props.ingredientRemoved(cntrl.type)} disabled={props.disabled[cntrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls;