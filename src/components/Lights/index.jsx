import React, { useState } from 'react';
import Light from '../Light';
import './style.css';

const Lights = ({lights}) => {


    return(
    <>
        <div className="lights">

            { lights.map( bulb => <Light key={bulb.name} name={bulb.name} state={bulb.state} />) }

        </div>

    </>
    );
}

export default Lights;