// src/components/EventCard.js
import React from 'react';
import styles from '../styles/EventCard.module.css';


function EventCard({ event }) {

  const goToLogin = () => {
    window.location.href = '/login'; // Redirigir a la página de login
  }

  return (
    <div className={styles.eventCard}>
      <img src={event.image} alt={event.title} className="eventImage" />
      <div className={styles.eventInfo}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>{event.lugar}</p>
        <p>{event.hora}</p>
        <p>{event.precio}</p>
        <div>
            <button onClick={goToLogin}>Comprar Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;