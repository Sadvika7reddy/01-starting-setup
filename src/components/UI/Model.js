import {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';
const BackDrop=()=>{
    return(
        <div className={classes.backdrop}></div>
    )
}
const ModelOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const overlayElement=document.getElementById('overlay');
const Model=props=>{
    return(<Fragment>
        {ReactDOM.createPortal(<BackDrop/>,overlayElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,overlayElement)}
    </Fragment>
    )
}
export default Model;