import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      {/* <Route path='/' element={<Layout />} /> */}
      <Route path='download' element={<Layout />} />
      <Route path='/' element={<Layout />} />
      
    </Routes>
  );
}

function Layout() {
  return (
    <Flex direction="column" flex="1">
      <NavBar />
      <Main />
      <Footer />
    </Flex>
  )
}

export default App;
