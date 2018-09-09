import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import DefaultLayout from 'shared/layout/DefaultLayout';
import LargeSpinner from 'shared/loading/LargeSpinner';

const CharacterList = Loadable({
  loader: () => import('containers/Characters/CharacterList'),
  loading: LargeSpinner
});

class Routes extends Component {
  render() {
    return (
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={CharacterList} />
            <Redirect from="*" to="/" />
          </Switch>
        </DefaultLayout>
      </Router>
    );
  }
}

export default Routes;
