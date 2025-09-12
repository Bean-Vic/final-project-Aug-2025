import React, { useContext } from 'react';
import { context } from './context';

const ChildComponent = () => {
    const contextValue = useContext(context);
    return (
        <div>hello world from {contextValue}</div>
    )
};

const LoopedComponent = ({ children }) => {
    return (
        <div>
            <div>this from LoopedComponent</div>
            {children}
        </div>
    );
}

const ConsumerComponent = () => {
    return (
        <context.Consumer>
            {context => (<div>This is Consumer Component, value: {context}</div>)}
        </context.Consumer>
    )
}

export const ParentComponent = () => {
    return (
        <context.Provider value="bean">

            <>
                <LoopedComponent>
                    <LoopedComponent>
                        <ChildComponent />
                    </LoopedComponent>
                </LoopedComponent>

                <ConsumerComponent />
            </>
        </context.Provider>
    )
};