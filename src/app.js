import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboard = () => (
  <div>
    This is from dashboard component
  </div>
)

const AddExchangePage = () => (
  <div>
    This is from my add expense component
  </div>
)

const EditExchangePage = () => (
  <div>
    This is from Edit expense component
  </div>
)

const HelpPage = () => (
  <div>
    This is from my Help component
  </div>
)

const NotFoundPage = () => (
  <div>
    404
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboard} exact={true} />
      <Route path="/create" component={AddExchangePage} />
      <Route path="/edit" component={EditExchangePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))