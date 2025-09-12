import React, { useState, useRef } from 'react';

export const UseRefToAccessDOM = () => {
    const ref = useRef(null);

    // ref.current
    const handleClick = () => {
        console.log(ref);
        ref.current.value = '';
    }

    return (
        <div>
            <input ref={ref} />
            <button onClick={handleClick}>Reset</button>
        </div>
    )
}

export const UseRefToStoreTimerID = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); // store interval ID

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export function DynamicAddElement() {
    // 1. 创建一个 ref
    // 我们使用 useRef() 创建一个 ref 对象。这个 ref 将被绑定到我们想要操作的 div 元素上。
    const containerRef = useRef(null);

    const handleAddParagraph = () => {
        // 3. 在事件处理函数中，通过 ref 访问 DOM 元素
        // `containerRef.current` 存储了我们通过 `ref` 属性绑定的 DOM 元素。
        if (containerRef.current) {
            // 创建一个新的 p 元素
            const newParagraph = document.createElement('p');
            newParagraph.textContent = '这是一个新添加的段落。';
            newParagraph.style.cssText = 'color: #333; font-style: italic; margin-top: 10px;';

            // 4. 使用 ref 确定的位置，将新元素添加到 DOM 中
            // 这里，我们将新创建的 p 元素作为子元素添加到 containerRef.current 指向的 div 中。
            containerRef.current.appendChild(newParagraph);
        }
    };

    return (
        <div>
            {/* 2. 将 ref 绑定到 HTML 元素
          我们通过 ref={containerRef} 将创建的 ref 绑定到这个 div 上。
          这样，React 就会将这个 div 的 DOM 实例赋值给 containerRef.current。 */}
            <div
                ref={containerRef}
                style={{
                    border: '2px dashed #ccc',
                    padding: '20px',
                    minHeight: '100px',
                    marginTop: '20px'
                }}>
                <p>这是原始容器中的内容。</p>
            </div>

            <button onClick={handleAddParagraph} style={{ marginTop: '20px' }}>
                点击我，添加一个新段落
            </button>
        </div>
    );
}