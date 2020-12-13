import React from 'react';

const Dashboard = ({user}) => {
    return (
        <div>
            <h2>{`Welcome to Trails Hub, ${user.username}`}</h2>
        </div>
    );
};

export default Dashboard;