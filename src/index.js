import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';

// emulating page lazy load times for fun
const parentContainer = css`
  height: calc(100vh - 16px);
  background: #f8f9fa;
`
const Main = React.lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./pages/Main')), 1000)));
const Success = React.lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./pages/Success')), 1000)));
const Loading = () => { 
  return <h2>... Now Loading</h2>; 
}

ReactDOM.render(
  <React.StrictMode>
    <div className="p-grid p-justify-center p-align-center" css={parentContainer}>
      <Suspense fallback={<Loading />}>
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/success" component={Success} />
        </Router>
      </Suspense>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
