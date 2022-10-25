import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Downloads from './components/Pages/Downloads';
import Installation from './components/Pages/Installation';
// import Terms from './components/Parts/Terms'
import ContactUs from './components/Pages/ContactUs';
import Register from './components/Pages/Register';
import Premium from './components/Pages/Premium';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="go-premium" element={<Premium />} />

        <Route path="downloads" element={<Downloads />} />
        <Route path="how-to-install" element={<Installation />} />
        {/* <Route path="terms-of-service" element={<Terms />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
}

function Layout() {
  return (
    <Flex direction="column" flex="1">
      <NavBar />
      <Outlet />
      <Footer />
    </Flex>
  );
}

export default App;
