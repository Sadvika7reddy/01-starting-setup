import classes from './Cart.module.css';
import Model from '../UI/Model';
const Cart=props=>{
    const CartItems=<ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount:2,price:200}].map(items=><li>{items.name}</li>)}</ul>
    return(
        <Model onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions }>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>open</button>
            </div>
        </Model>
    )
}
export default Cart;