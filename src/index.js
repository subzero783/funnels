
import React from "react";

import { render } from "react-dom";

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './index.scss';
import './bootstrap/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import FunnelOne from './components/pages/FunnelOne/FunnelOne'; 
import FunnelTwo from './components/pages/FunnelTwo/FunnelTwo'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FunnelOne/>} />
        <Route exact path="/free-pdf" element={<FunnelTwo/>} />
      </Routes>
    </Router>
  );
};

render(<App />, document.getElementById('root'));