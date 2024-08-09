import React from 'react';
import './Card.css';

const Card = (props) => {
    const date = new Date();

  return (
    
      <div id='body'>
        <div id='TodoCard'>
            <h2 id='title'>{props.title}</h2>
            <h2 id='note'>{props.note}</h2>
            <h2 id='date'>Date : {date.getDate()} / {date.getMonth()} / {date.getFullYear()}</h2>
            <button id='btnDelete' onClick={props.onDelete}>Delete</button>
        </div>
       </div>
    
  )
}

export default Card
