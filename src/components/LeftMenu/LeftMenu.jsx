import React from "react";
import s from './LeftMenu.module.css';
import { NavLink } from "react-router-dom";


const LeftMenu = (props) => {
    return (

        <div className={s['left-column']}>
            <ul>
                <li><NavLink to='/userpage' activeClassName={s.activeLink}>Главная страница</NavLink></li>
                <li><NavLink to='/feed' activeClassName={s.activeLink}>Новости</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={s.activeLink}>Диалоги</NavLink></li>
                <li><a>Группы</a></li>
                <li><a>Настройки</a></li> 
                <li><a>Выход</a></li>
            </ul>
        </div>
    )
};

export default LeftMenu;

