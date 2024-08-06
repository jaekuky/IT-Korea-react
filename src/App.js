import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">
        <Header></Header>
        <Routes>
         <Route path='/' element={<Main />}></Route> 
         <Route path='/login' element={<Login />}></Route> 
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
