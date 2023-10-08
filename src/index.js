import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter} from "react-router-dom";
import {MaterialTailwindControllerProvider} from "./version_dos/context";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <ThemeProvider>
                    <MaterialTailwindControllerProvider>
                        <App/>
                    </MaterialTailwindControllerProvider>
                </ThemeProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
