import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { AuthContextProvider } from './components/context/AuthContext.jsx';

const { NODE_ENV } = import.meta.env;

const queryClient = new QueryClient();

if (NODE_ENV === 'development') {
  axios.defaults.withCredentials = true;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>

        <ReactQueryDevtools initialIsOpen />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
