// src/components/EventCatalog.js
import React from 'react';
import EventCard from './EventCard';
import styles from '../styles/EventCatalog.module.css';

function EventCatalog({ events }) {
  return (
    <div className={styles.EventCatalog}>
      {events.map(event => <EventCard key={event.id} event={event} />)}
    </div>
  );
}

export default EventCatalog;