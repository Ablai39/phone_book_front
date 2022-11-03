import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundary';
import StoreService from './services/store-services';
import { StoreServiceProvider } from './components/service-context';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';

const storeService = new StoreService();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <StoreServiceProvider value={storeService}>
                    <Router>
                        <App />
                    </Router>
                </StoreServiceProvider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>
);