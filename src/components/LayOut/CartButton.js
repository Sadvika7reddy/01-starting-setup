import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/CartContext'
const CartButton=(props)=>{
    const cartCtx=useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity);
    })

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Add Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    )
}
export default CartButton;