import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
// import Home from './components/Parts/Home'
// import Downloads from './components/Parts/Downloads'
// import Installation from './components/Parts/Installation'
// import Terms from './components/Parts/Terms'
// import ContactUs from './components/Parts/ContactUs'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* <Route index element={<Home />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="how-to-install" element={<Installation />} />
      <Route path="terms-of-service" element={<Terms />} />
      <Route path="/contact-us" element={<ContactUs />} /> */}
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
}

function Layout() {
  return (
    <Flex direction="column" flex="1">
      <NavBar />
      <Outlet />
      <Main />
      <Footer />
    </Flex>
  );
}

export default App;
