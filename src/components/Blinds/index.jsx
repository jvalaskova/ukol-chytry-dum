import React, { useState } from 'react';
import blindsClosedImg from './images/blinds-closed.svg';
import blindsOpenImg from './images/blinds-open.svg';
import './style.css';

const Blinds = ({state}) => {

    const [blinds, setBlinds] = useState(state)

    const handleOpen = () => {
        setBlinds('open')
    }

    const handleClosed = () => {
        setBlinds('closed')
    }

    return(
        <>
            <div className="blinds">
				<div className="blinds__icon">
					<img src={blinds==='open' ? blindsOpenImg : blindsClosedImg} />
				</div>

				<div className="blinds__name">
					Žaluzie
				</div>

				<div className="blinds__controls">
					<button className={blinds==='open' ? 'button button--active' : 'button '} onClick={handleOpen}>Otevřeno
                    </button>

					<button className={blinds==='closed' ? 'button button--active' : 'button '} onClick={handleClosed}>Zavřeno
                    </button>
				</div>
			</div>

        </>
    );
}


export default Blinds