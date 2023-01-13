import { useContext } from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';
import CartContext from '../../store/CartContext';
const Cart=props=>{
    const cartCntx=useContext(CartContext);
    let Amount=0;
    const CartItems=<ul className={classes['cart-items']}>{cartCntx.items.map(item=>
    <li className={classes.mod}>Name:{item.name}   price:{item.amount}   Quantity:{item.quantity}</li>)}</ul>
    cartCntx.items.forEach(item=>{
        Amount=Amount+item.amount;
    })
    return(
        <Model onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{Amount}</span>
            </div>
            <div className={classes.actions }>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>open</button>
            </div>
        </Model>
    )
}
export default Cart;