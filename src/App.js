import React from 'react';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../src/containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" component={Orders} />
        </Switch>
        
        
      </Layout>
    </div>
  );
}

export default App;
