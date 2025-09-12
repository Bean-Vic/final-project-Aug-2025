import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Settings = () => <h4>This is Settings component</h4>;
export const Status = () => <h4>This is Status Component</h4>;

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <NavLink to="settings" style={{ marginRight: '1rem' }}>
                    Settings
                </NavLink>
                <NavLink to="status">Status</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default Dashboard;
