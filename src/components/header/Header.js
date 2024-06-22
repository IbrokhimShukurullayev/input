import React, { useState } from 'react';
import "./header.scss";

import logo from "../../assets/images/Logo.svg";
import { NavLink } from 'react-router-dom';
import Modal from '../modal/Modal';

import { IoClose } from "react-icons/io5";

import { useGetInputValuen } from '../../hooks/useGetInputValue';

const initialState = {
  UserName: "",
  password: ""
}

const initialStates = {
  UserName: "",
  password: ""
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistar, setIsRegistar] = useState(false);

  const {formData , handlechange , setFormData} = useGetInputValuen(initialState)
  // const {formData , handlechange , setFormData} = useGetInputValuen(initialStates)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = e => {
    e.preventDefault()
    setFormData(initialState)
    console.log(formData);
  }

    const handleLogins = e => {
    e.preventDefault()
    setFormData(initialStates)
    console.log(formData);
  }


  const [formDatas,setFormDatas] = useState(initialStates )

    const handlechanges =  e =>{
        const {name , value} = e.target
        setFormDatas(prev=> ({...prev , [name]: value}) )
    }

  return (
    <>
      <header id='navbar' className='navbar header'>
        <nav className="container nav">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <ul className="nav__list">
            <li className="nav__item"><NavLink to={"/"} className="nav__link">Home</NavLink></li>
            <li className="nav__item"><NavLink to={"/user"} className="nav__link">User</NavLink></li>
            <li className="nav__item"><a href='#' className="nav__link">Projact</a></li>
            <li className="nav__item"><a href='#' className="nav__link">Contact me</a></li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item"><button onClick={()=> setIsLogin(true)} className='download'>Log in</button></li>
            <li className="nav__item"><button onClick={()=> setIsRegistar(true)} className='download'>Registar</button></li>
          </ul>

          <div id="navbar-responsive" className={isOpen ? 'open' : ''}>
            <ul className="res__nav__list">
              <a className="nav__logo__link" href="#">
                <img src={logo} alt="Logo" />
              </a>
              <li className="res__nav__item"><NavLink to={"/"} className="res__nav__link">Home</NavLink></li>
              <li className="res__nav__item"><a href="#services" className="res__nav__link">About Me</a></li>
              <li className="res__nav__item"><a href="#Услуги" className="res__nav__link">Skills</a></li>
              <li className="res__nav__item"><a href="#software" className="res__nav__link">Project</a></li>
              <li className="res__nav__item"><a href="#carusel" className="res__nav__link">Contact me</a></li>
              <a href='https://www.canva.com/design/DAGDikASBa4/aRTZiSWHzXZZpFJ0SZwiNg/edit' className="res-download">
                <p>Log in</p>
              </a>
            </ul>
            <button id="navbar-close" onClick={toggleNavbar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </button>
          </div>
          <button id="navbar-open" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </button>
        </nav>
      </header>
      {
        isLogin ? 
      <Modal close= {setIsLogin}>
        <div className='modal__header'>
          <h2>Log in</h2>
          <p onClick={()=> setIsLogin(false)}><IoClose/></p>
        </div>
        <form onSubmit={handleLogin} action="">
          <input value={formData.UserName} onChange={handlechange} type="text" name='UserName' placeholder='username'/>
          <input value={formData.password} onChange={handlechange} type="text" name='password' placeholder='password' />
          <button>Submit</button>
        </form>
      </Modal> 
      : 
      <></>
      }

      {
        isRegistar ? 
      <Modal close= {setIsRegistar}>
        <div className='modal__header'>
          <h2>Registar</h2>
          <p onClick={()=> setIsRegistar(false)}><IoClose/></p>
        </div>
        <form onSubmit={handleLogins} action="">
          <input value={formDatas.UserName} onChange={handlechanges} type="text" name='UserName' placeholder='username'/>
          <input value={formDatas.password} onChange={handlechanges} type="text" name='password' placeholder='password' />
          <input type="text" placeholder='password' />
          <input type="text" placeholder='password' />
          <input type="text" placeholder='password' />
          <button>Submit</button>
        </form>
      </Modal> 
      : 
      <></>
      }
    </>
  );
}

export default Header;