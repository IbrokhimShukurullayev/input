import './App.css';
import Header from './components/header/Header';

import { Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/home/Home';
import User from './pages/user/User';
import NotFound from './components/404/NotFound';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
