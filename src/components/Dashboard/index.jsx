import React from 'react';
import Lights from '../Lights';

const Dashboard = (data) => {
    return(
        <>
        <main class="dashboard">
            <Lights lights={data}/>
            <Climate />
            <Blinds />
            <Energy />
        </main>
        </>
    );
}

export default Dashboard;