import React from "react";
import s from './MainContentWrapper.module.css';

import NewsItem from './NewsItem/NewsItem';



const MainContentWrapper = (props) => {
    return (
        <div className={s['main-content-wrapper']}>
            <NewsItem />
            <NewsItem />
        </div>
    )
};

export default MainContentWrapper;

