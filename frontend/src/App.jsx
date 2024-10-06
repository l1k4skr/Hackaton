// src/App.js
import React, { useState } from 'react';
import EventCatalog from './components/EventCatalog';
import { api } from './service/EventApi/api';
import Layout from './layouts/Layout';
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import SiulationPage from './pages/SimulationPage'
import ChatBotComponent from './pages/ChatBot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [events, setEvents] = useState(api);


  



  return (
<>
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<EventCatalog events={events} />}/>      
          <Route path="/main-page" element={<MainPage/>}/>
          <Route path="/simulation-page" element={<SiulationPage/>}/>
          <Route path="/chat" element={<ChatBotComponent/>}/>
        </Routes>
      </Layout>
    </Router>
</>
  );
}

export default App;