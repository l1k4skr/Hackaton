// src/App.js
import React, { useState } from 'react';
import EventCatalog from './components/EventCatalog';
import './styles/App.css';
import { api } from './service/EventApi/api';
import Layout from './layouts/Layout';

function App() {
  const [events, setEvents] = useState(api);

  



  return (
    <div className="App">
      <Layout tipo_usuario="Administrador">
        <h1>Catálogo de Eventos</h1>
        <EventCatalog events={events} />
      </Layout>
    </div>
  );
}

export default App;