import React from "react";
import { Switch, Route } from "react-router-dom";
import Home  from './Home';
import Products  from './Products';

const Pages = () => {
    return <section>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={ Products } />

        </Switch>
    </section>;
};

export default Pages;
