import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalState from "./GlobalContext";

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)


root.render(
    <GlobalState>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </GlobalState>
);


