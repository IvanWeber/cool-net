import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

let Preloader = (props) => {
    return <div style={{backgroundColor: 'red', width: '120px;'}}>
        <img src={preloader} />
    </div>
}

export default Preloader;