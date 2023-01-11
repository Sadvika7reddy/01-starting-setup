import {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';
const BackDrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onClose}></div>
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
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,overlayElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,overlayElement)}
    </Fragment>
    )
}
export default Model;