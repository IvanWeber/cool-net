import React from "react";
import s from './Content.module.css';

import LeftMenu from '../LeftMenu/LeftMenu'
// import MainContentWrapper from './MainContentWrapper/MainContentWrapper'


const Content = (props) => {
    return (
        <div className={s['content']}>
            <LeftMenu />
            <MainContentWrapper />
        </div>
    )
};

export default Content;

