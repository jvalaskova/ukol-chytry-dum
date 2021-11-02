import React, { useState } from 'react';
import LightOnImg from './imagesLight/light-on.svg';
import LightOffImg from './imagesLight/light-off.svg';
import './style.css';

const Light = ({name, state}) => {

    const [bulbState, setBulbState] = useState(state)

    const handleClick = () => {
        if (bulbState === 'on') {
            setBulbState('off');
        } else {
            setBulbState('on');
        }
    }

    return(
        <>
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={bulbState==='on' ? LightOnImg : LightOffImg} />
            </div>

            <div className="light__name">
                {name}
            </div>
        </div>
        </>
    );
}

export default Light;