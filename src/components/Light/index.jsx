import React, { useState } from 'react';
import LightOn from './imagesLight/light-on.svg';
import LightOff from './imagesLight/light-off.svg';

const Light = ({name, state}) => {

    const [bulbState, setBulbState] = useState(state)

    const handleClick = () => {
        if (bulbState === 'on') {
            setBulbState(LightOn)
        } else {
            setBulbState(LightOff)
        }
    }

    return(
        <>
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={state ? LightOn : LightOff} />
            </div>

            <div className="light__name">
                {name}
            </div>
        </div>
        </>
    );
}

export default Light;