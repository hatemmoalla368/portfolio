import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  

  return (
    <Router>
    <GlobalStyles />
    <Header/>
    
    <Routes>
      
    <Route path='/' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>



      
    </Routes>
    <Footer/>
    
  </Router>
  )
}

export default App
