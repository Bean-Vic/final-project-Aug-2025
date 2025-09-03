import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import DefaultComponent, { HelloWorld1, StateExample } from 'src/example/hello-world'; //具名导入
import { Provider } from 'react-redux';
import store from 'src/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<DefaultComponent  />*/}
            {/*<HelloWorld1 />*/}
            <StateExample />
            {/*<App />*/}
        </Provider>
    </React.StrictMode>,
);
