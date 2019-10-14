import React from 'react';
import Layout from './Layout/Layout';
import Read from './components/Read';
import Home from './components/Home';
import Isbn from './components/Isbn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/find">
            <Read />
          </Route>
          <Route path="/isbn/:id" children={<Isbn />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
