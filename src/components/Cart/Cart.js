import { useContext } from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';
import CartContext from '../../store/CartContext';
const Cart=props=>{
    const cartCntx=useContext(CartContext);
    const totalAmount=cartCntx.totalAmount;
    const onRemoveHandler=id=>{
        cartCntx. removeItem(id);

    }
    const onAddHandler=item=>{
        cartCntx.addItem({...item,quantity:1})

    }
    const CartItems=<ul className={classes['cart-items']}>{cartCntx.items.map(item=>
    <li className={classes.mod}>
        <div>Name:{item.name}   price:{item.amount}   Quantity:{item.quantity}</div>
        <div>
            <button onClick={onRemoveHandler.bind(null,item.id)}>-</button>
            <button onClick={onAddHandler.bind(null,item)}>+</button>
        </div>
    </li>)}</ul>
    
    return(
        <Model onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions }>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    )
}
export default Cart;