import React, { useState } from 'react';

import tempImg from './temp.svg';
import './style.css';

const Climate = ({temperature, humidity}) => {

    const [temp, setTemp] = useState(temperature)

    const handlePlus = () => {
       setTemp(temp + 1)
    }

    const handleMinus = () => {
        setTemp(temp - 1)
     }


    return(
        <>
        <div className="climate">
				<div className="climate__icon">
					<img src={tempImg} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{temp}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={handlePlus}>+</button>
					<button className="button" onClick={handleMinus}>-</button>
				</div>
			</div>
        </>
    );
}

export default Climate;