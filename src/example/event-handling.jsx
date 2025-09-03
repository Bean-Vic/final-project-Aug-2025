import React from 'react';

export const EventHandlingExample = () => {

    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                border: '10px solid red',
                margin: '100px',
                textAlign: 'center',
                alignContent: 'center',
            }}
            tabIndex={0}
            onFocus={() => console.log('Focus')}
        >
            Demo box
        </div>
    );
}

export function NestedButtons() {
    const handleOuterClick = () => {
        console.log('外层 div 被点击');
    };

    const handleInnerClick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡到外层
        console.log('按钮被点击');
    };

    return (
        <div onClick={handleOuterClick}>
            <button onClick={handleInnerClick}>点我</button>
        </div>
    );
}