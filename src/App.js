import React from 'react';
import Header from './components/Header';
import ListProducts from './components/Products';

import './index.css'
import 'boxicons';

function App() {
    return (
        <div className="App">

            <Header />
            <ListProducts />
        </div>
    );
}

export default App;
