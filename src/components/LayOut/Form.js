import { useContext} from 'react';
import classes from './Form.module.css'
import Input from '../UI/Input';
import CartContext from '../../store/CartContext';
const Form=(props)=>{
    const cartCntx=useContext(CartContext);
   const addingOnCart=(event)=>{
    event.preventDefault();
    const quantity=document.getElementById("amount"+props.id).value;
    const value=props.id;   
    cartCntx.addItem({...props.item,quantity:quantity});

   }
    return(
        <form className={classes.form}> 
            <Input label='Amount' input={{
                id:"amount"+props.id,
                type:"number",
            }}/>
            <button onClick={addingOnCart}>+Add</button>
        </form>
    )
}
export default Form;