import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Loading from './components/Loading';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';

// emulating page lazy load times for fun
const Main = React.lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./pages/Main')), 1000)));
const Success = React.lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./pages/Success')), 1000)));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/success" component={Success} />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
