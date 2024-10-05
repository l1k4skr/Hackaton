// src/components/EventCard.js
import React from 'react';
import styles from '../styles/EventCard.module.css';


function EventCard({ event }) {
  return (
    <div className={styles.eventCard}>
      <img src={event.image} alt={event.title} className="eventImage" />
      <div className={styles.eventInfo}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <button onClick={() => alert('Implementar compra')}>Comprar Ticket</button>
      </div>
    </div>
  );
}

export default EventCard;