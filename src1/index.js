import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, Link, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import { Provider } from 'react-redux';
import store from './store';
import Cartscreen from './screens/Cartscreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoutes from './components/PrivateRoutes';
import PaymentScreen from './screens/PaymentScreen';
import PlaceorderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';


const router = createBrowserRouter 
(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Homescreen/>} />
      <Route  path="/product/:id" element={<Productscreen/>} />
      <Route  path="/cart" element={<Cartscreen/>} />
      <Route  path="/login" element={<LoginScreen/>} />
      <Route  path="/register" element={<RegisterScreen/>} />

      <Route path='' element={<PrivateRoutes/>}>
          <Route  path="/shipping" element={<ShippingScreen/>} />
          <Route  path="/payment" element={<PaymentScreen/>} />
          <Route  path="/placeorder" element={<PlaceorderScreen/>} />
          <Route  path="/order/:id" element={<OrderScreen/>} />
      </Route>
      
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
