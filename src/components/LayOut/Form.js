import { Fragment } from 'react';
import classes from './Form.module.css'
import Input from '../UI/Input';
const Form=(props)=>{
    return(
        <form className={classes.form}>
            <Input label='Amount' input={{
                id:'amount',
                min:'1',
                max:'2',
                type:'number',
                defaultValue:'1'
            }}
            />
            <button>+Add</button>
        </form>

    )
}
export default Form;