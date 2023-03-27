<<<<<<< HEAD
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Signup from './components/Signup';
import Contact from './components/Contact'
import PredictorPicker from './components/Predictor-Picker';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/predictorpicker' element={<PredictorPicker />} />
        </Route>
      </Routes>
    </>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Sports from './pages/Sports';
// import PredictorPicker from './pages/PredictorPicker';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
      <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/sports' element={<Sports />} />
          </Routes>
      </>
    </ApolloProvider>
>>>>>>> 0f15c25d954d0ce14c83b2462486492000610d65
  )
}

export default App;
