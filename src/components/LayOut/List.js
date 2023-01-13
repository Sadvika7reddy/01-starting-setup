import classes from './List.module.css';
import { Fragment } from 'react';
import Form from './Form';
let DummyItems=[
    {
        id:"s1",
        name:"Sushi",
        items:"fish",
        amount:12
    },
    {
        id:"s2",
        name:"chapathi",
        items:"flour",
        amount:10
    },
    {
        id:"s3",
        name:"curry",
        items:"vegetables",
        amount:5
    },
]
const List=(props)=>{
    let mapList=DummyItems.map(item=><li className={classes.p}><h3>{item.name}</h3>
    <h4>{item.items}</h4>{item.amount}
    <div>
    <Form id={item.id} item={item}/>
    </div>
    </li>)
    return(
    <Fragment>
        <div className={classes.list}>{mapList}</div>
    </Fragment>
    )

}
export default List;