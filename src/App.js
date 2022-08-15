import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css'


const App = () => {
  return (
    <div className='body'>
        {/* <SignUp /> */}
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path="/" element={<Navigate to="/signup"/>}/>
        </Routes>
    </div>
  );
};

export default App;