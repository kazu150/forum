import React from 'react';
// import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageThread from './components/PageThread';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <PageHome />
        </Route>
        <Route exact path={'/threads/:threadId'}>
          <PageThread />
        </Route>
        <Route path={'*'}>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
