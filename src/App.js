import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import NewTask from './pages/NewTask';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllTasks/>
          </Route>
          <Route path='/new'>
            <NewTask/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;