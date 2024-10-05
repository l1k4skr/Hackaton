// src/components/EventCatalog.js
import React from 'react';
import EventCard from './EventCard';
import styles from '../styles/EventCatalog.module.css';

function EventCatalog({ events }) {
  return (
    <>
    <h3>Catalogo de Eventos</h3>
    <div className={styles.EventCatalog}>
      {events.map(event => <EventCard key={event.id} event={event} />)}
    </div>
    </>
  );
}

export default EventCatalog;