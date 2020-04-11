import React from "react";
import s from './LeftMenu.module.css';
import { NavLink } from "react-router-dom";


const LeftMenu = (props) => {
    return (

        <div className={s['left-column']}>
            <ul>
                <li><NavLink to='/userpage'>Главная страница</NavLink></li>
                <li><NavLink to='/feed'>Новости</NavLink></li>
                <li><a>Группы</a></li>
                <li><a>Настройки</a></li> 
                <li><a>Выход</a></li>
            </ul>
        </div>
    )
};

export default LeftMenu;

