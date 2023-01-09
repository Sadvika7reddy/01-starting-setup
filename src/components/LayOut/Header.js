import React,{Fragment} from 'react';
import classes from './Header.module.css';
import CartButton from './CartButton';
import Meals from './Meals';
const Header=()=>{
    return(
    <Fragment>   
        <header className={classes.header}>
            <h1>React Order</h1>
            <CartButton />
        </header>
        <div className={classes.image}>
            <img src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"/>
        </div>
    </Fragment>    
    )
}
export default Header;