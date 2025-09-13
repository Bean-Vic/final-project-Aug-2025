import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
    return (
        <>
            <h2>404 - Page Not Found</h2>
            <h4>you are trying to access:</h4>
            <div>Path Name: {location?.pathname}</div>
            <div>Search Param: {location?.search}</div>
            <div>Hash Param: {location?.hash}</div>
            <div>State: {location?.state}</div>
            <div>Key (internal): {location?.key}</div>
        </>
    );
};

export default NotFound;
