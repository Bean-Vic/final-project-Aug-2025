import React from 'react';
import PropTypes from 'prop-types';

export class HelloWorld extends React.Component {
    render() {
        const prop = this.props;
        return (
            <div>
                This is class component
            </div>
        );
    }
}

function bcd() {}

const abc = () => {};













export const FunctionalComponent = ({ bean, shouldUpdate = false, testAttr }) => {
    // const bean = props.bean;
    // const shouldUpdate = props.shouldUpdate;
    console.log(`~~~~~~shouldUpdate: ${shouldUpdate}`)
    // console.log('props: ', props);
    console.log(`bean: ${bean}`);
    return (
        <div>
            {shouldUpdate ? <div>should update</div> : <div>This is functional component</div>}
        </div>
    );
};

FunctionalComponent.propTypes = {
    bean: PropTypes.string.isRequired,
    shouldUpdate: PropTypes.bool,
    testAttr: PropTypes.number.isRequired,
};
FunctionalComponent.defaultProps = {
    shouldUpdate: false,
};















export function Keyword() {
    return (
        <div>
            This is function keyword component
        </div>
    );
}















const items = [
    {
        name: 'Apple',
        id: 1,
    },
    {
        name: 'Banana',
        id: 2,
    },
];


export const ListRenderingExample = () => {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <span>name: {item.name}</span>
                        <span>id: {item.id}</span>
                    </div>
                );
            })}
        </div>
    );
};

