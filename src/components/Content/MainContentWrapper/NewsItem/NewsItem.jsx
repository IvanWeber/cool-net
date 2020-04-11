import React from "react";
import s from './NewsItem.module.css';


const NewsItem = (props) => {
    return ( 
        <div className={s['div']}>
            <h2>{props.head}</h2>
            <p>{props.par}</p>
        </div>
    )
};

export default NewsItem;

