import React from 'react'; 
import './Marvel.css';
function Marvel(props){
    return(
        <div className='marvel-card'>
        <div className='marvel-title'>{props.title }</div>
        <div className='marvel-universe'>{props.universe}</div>
        <div className='marvel-ego'>{props.ego}</div>
        <div className='marvel-type_of_activity'>{props.type_of_activity}</div>
        <div className='marvel_superpower'>{props.superpower}</div>
        <img src={props.url} alt=""/>
        <div className='marvel-more'>{props.more}</div>
      </div>
    )
}
export default Marvel;