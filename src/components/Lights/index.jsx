import React, { useState } from 'react';
import Light from '../Light';

const Lights = (lights) => {


    return(
    <>
        <div className="lights">

            { lights.map( bulb => <Light name={bulb.name} state={bulb.state} />)

            }

        </div>

    </>
    );
}

export default Lights;