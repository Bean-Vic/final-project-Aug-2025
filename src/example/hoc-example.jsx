import React from 'react';

// const EnhancedComponent = withSomething(BaseComponent);

export const Base = ({ name }) => {
    return (
        <div>Hello, {name}</div>
    )
};

const withLogger = (Component) => {
    const ReturnComponent = (props) => {
        console.log(`Logger in HOC, props: ${JSON.stringify(props)}`);
        return <Component {...props} />;
    };
    return ReturnComponent;
};

export const EnhancedComponent = withLogger(Base);
