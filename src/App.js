import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages';
import Car from './components/Car'

import { DataProvider } from './context/Dataprovider'

import './index.css';
import 'boxicons';

function App() {
    return (
        <DataProvider >
            <div className="App">
                <Router>
                    <Header />
                    <Car />
                    <Pages />

                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
