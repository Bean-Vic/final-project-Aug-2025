import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
// import DefaultComponent, { HelloWorld1, StateExample } from 'src/example/hello-world'; //具名导入
import { FunctionalComponent, ListRenderingExample } from 'src/example/functional-components-example';
import { Base, EnhancedComponent } from 'src/example/hoc-example';
import { EventHandlingExample, NestedButtons } from "src/example/event-handling";
import { ControlledComponent, UncontrolledComponent } from "src/example/controlled-uncontrolled-example";
import { Provider } from 'react-redux';
import store from 'src/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<Base name="zoey" />*/}
            {/*<EnhancedComponent name="bean" />*/}
            {/*<FunctionalComponent bean="bean" shouldUpdate={true} testAttr="123" />*/}
            {/*<ListRenderingExample />*/}
            {/*<EventHandlingExample />*/}
            {/*<NestedButtons />*/}
            <ControlledComponent />
            <UncontrolledComponent />
            {/*<DefaultComponent  />*/}
            {/*<HelloWorld1 />*/}
            {/*<StateExample />*/}
            {/*<App />*/}
        </Provider>
    </React.StrictMode>,
);
