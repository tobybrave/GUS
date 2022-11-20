import React from 'react';
import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Downloads from './components/Pages/Downloads';
import Installation from './components/Pages/Installation';
import Terms from './components/Pages/Terms';
import Register from './components/Pages/Register';
import Premium from './components/Pages/Premium';
import Report from './components/Pages/ReportContact';
import Login from './components/Pages/Login';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="go-premium" element={<Premium />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="report" element={<Report />} />
        </Route>
        <Route path="how-to-install" element={<Installation />} />
        <Route path="terms-of-service" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
}

function Layout() {
  const { user } = useAuth();
  return (
    <Flex direction="column" flex="1">
      <NavBar user={user} />
      <Outlet />
      <Footer />
    </Flex>
  );
}

function ProtectedRoute({ redirectPath = '/login', children }) {
  const { user } = useAuth();

  return (
    user ? (children || <Outlet />) : <Navigate to={redirectPath} replace />
  );
}

// import { Link, Navigate, useOutlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import { AppBar } from "./AppBar";

// export const ProtectedLayout = () => {
//   const { user } = useAuth();
//   const outlet = useOutlet();

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div>
//       <AppBar
//         pages={[
//           { label: "Settings", path: "settings" },
//           { label: "Profile", path: "profile" }
//         ]}
//       />
//       {outlet}
//     </div>
//   );
// };

export default App;
