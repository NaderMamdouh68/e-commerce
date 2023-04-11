/* eslint-disable no-restricted-globals */
import './App.css';
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header';
import axios from 'axios'
function App() {

  const handleLogOut = () => {
    axios.get('http://localhost:5000/authentication/logout',{
      headers: {
        authorization : localStorage.getItem('token'),
      }
    })
    const conf = confirm('Are you sure you want to log out?', 'Log out')
    if (conf === true) {
      localStorage.removeItem('token')
      localStorage.removeItem('type')
      window.location.reload()
    }
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={handleLogOut} ></button>
      <Footer/>
    </div>
  );
}

export default App;
