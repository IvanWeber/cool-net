import React from "react";
import s from './Content.module.css';
import LeftMenu from '../LeftMenu/LeftMenu'


const Content = (props) => {
    return (
        <div className={s['content']}>
            <LeftMenu />
            <MainContentWrapper />
        </div>
    )
};

export default Content;

