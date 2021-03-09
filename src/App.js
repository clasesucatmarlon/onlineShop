import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import  Pages  from './components/Pages';

import './index.css'
import 'boxicons';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                {/* <ListProducts /> */}
                <Pages />

            </Router>
        </div>
    );
}

export default App;
