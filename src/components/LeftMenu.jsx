import React from "react";
import s from './LeftMenu.module.css';


const LeftMenu = (props) => {
    return (

        <div className={s['left-column']}>
            <ul>
                <li><a>Главная страница</a></li>
                <li><a>Новости</a></li>
                <li><a>Группы</a></li>
                <li><a>Настройки</a></li> 
                <li><a>Выход</a></li>
            </ul>
        </div>
    )
};

export default LeftMenu;

