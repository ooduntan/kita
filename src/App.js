import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Read from './components/Read';
import Home from './components/Home';
import Isbn from './components/Isbn';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/read" render={Read} />
        <Route path="/find" render={Read} />
        <Route path="/isbn/:id" render={Isbn} />
        <Route path="/" render={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
