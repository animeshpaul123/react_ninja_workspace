import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Reducers/AuthProvider';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Auth/PrivateRoute';

const Login = React.lazy(() => import('./containers/Login'));

const TheLayout = React.lazy(() => import('./containers/Layout'));
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <HashRouter>
          <React.Suspense fallback={<p>loading...</p>}>
            <Switch>
              <Route path="/login" name="Login Page" render={props => <Login {...props} />} />
              <PrivateRoute path="/" name="Home" render={props => <TheLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
