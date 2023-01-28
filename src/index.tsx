import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


{/* <Routes>
<Route path='/' element={<Parts />}/>
<Route path='/:section' element={<Section/>}/>
<Route path='/:section/:info' element={<Info/>}/>
</Routes> */}
