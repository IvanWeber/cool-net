import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg'></img>
            </div>
            <div>
                <img src={props.profile.photos.large} />
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;