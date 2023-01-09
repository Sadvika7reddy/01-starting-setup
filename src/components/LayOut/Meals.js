import classes from './Meals.module.css';
const Meals=(props)=>{
    return(
        <div className={classes.meals}>
            <h2>Delicious Food,Delivered To You </h2>
            <p>choose your favorite from our broad selection of available meals and enjoy a delicious lunch or dinner at home </p>
            <p>All our meals are cooked with high quality ingredients ,just in time and of course with experience chefs</p>
        </div>
    )
}
export default Meals;