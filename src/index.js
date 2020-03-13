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
import AuthenticationContextWrapper from "./contexts/AuthenticationContext";
import HomePage from "./components/pages/HomePage";
import ThemingPage from "./components/pages/ThemingPage";
import UseCallbackPage from "./components/pages/UseCallbackPage";
import UseLayoutEffectPage from "./components/pages/UseLayoutEffectPage";
import ReduxFormPage from "./components/pages/ReduxFormPage";
import StylingPage from "./components/pages/StylingPage";

// constants
import {
  THEMING_ROUTE,
  HOME_ROUTE,
  USE_CALLBACK_ROUTE,
  USE_LAYOUT_EFFECT_ROUTE,
  REDUX_FORM_ROUTE,
  STYLING_PAGE_ROUTE
} from './constants/routerConstants';

// providers
import ThemeProvider from './prividers/ThemeProvider';

// styles
import './index.css';

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <ThemeProvider>
      <Router>
        <AuthenticationContextWrapper>
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
              <Route path={HOME_ROUTE} exact>
                <HomePage />
              </Route>
              <Route path={THEMING_ROUTE}>
                <ThemingPage />
              </Route>
              <Route path={USE_CALLBACK_ROUTE}>
                <UseCallbackPage />
              </Route>
              <Route path={USE_LAYOUT_EFFECT_ROUTE}>
                <UseLayoutEffectPage />
              </Route>
              <Route path={REDUX_FORM_ROUTE}>
                <ReduxFormPage />
              </Route>
              <Route path={STYLING_PAGE_ROUTE}>
                <StylingPage />
              </Route>
            </Switch>
          </App>
        </AuthenticationContextWrapper>
      </Router>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
