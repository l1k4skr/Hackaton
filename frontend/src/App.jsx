// src/App.js
import React, { useState } from 'react';
import EventCatalog from './components/EventCatalog';
import './styles/App.css';
import { api } from './service/EventApi/api';


function App() {

  


  const [events, setEvents] = useState(api);

  return (
    <div className="App">
      <h1>Catálogo de Eventos</h1>
      <EventCatalog events={events} />
    </div>
  );
}

export default App;