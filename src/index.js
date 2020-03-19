/** @jsx jsx */
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store';
import { Global, css, jsx } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import normalize from "normalize.css";

// components
import App from './components/App';
import Sandbox from "./components/pages/Sandbox";

// constants
import {
  SANDBOX_ROUTE
} from './constants/routerConstants';

// styles
import './index.css';

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <Router>
      <App>
        <Global
          styles={css`
              ${normalize}
              body {
                background-color: #fafafa;
              }
            `}
        />
        <Switch>
          <Route path={SANDBOX_ROUTE} exact>
            <Sandbox />
          </Route>
        </Switch>
      </App>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
