import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProfileCardPage from './components/ProfileCardPage';

import IntroSection from './components/IntroSection';
import Home from './components/Home';
import Projects from './components/Projects';




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>

  
     
      <Route path ='/profile' element={<ProfileCardPage/>}/>
   
      <Route path='/h' element={<IntroSection/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/123' element={<Projects/>}/>
      
  


    </Routes>
  </BrowserRouter>
  </StrictMode>,
);
