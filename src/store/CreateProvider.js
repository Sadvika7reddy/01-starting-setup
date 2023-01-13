import CartContext from './CartContext';
import {useState} from 'react'

const CreateProvider=(props)=>{
    const [items,setItems]=useState([]);
    const addItemHandler=item=>{
        setItems([...items,item]);
    };
    const removeItemHandler=id=>{};

    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    };
        return<CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
};
export default CreateProvider;