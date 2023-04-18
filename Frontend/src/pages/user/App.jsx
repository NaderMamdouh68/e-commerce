/* eslint-disable no-restricted-globals */
import './App.css';
import Footer from '../../components/footer/Footer.jsx'
import Header from '../../components/header/Header';

import { Outlet } from 'react-router-dom';
function App() {
  if(localStorage.getItem('type') === 'admin' || !localStorage.getItem('token')){
    return window.location.href = '/login'
  }



  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
