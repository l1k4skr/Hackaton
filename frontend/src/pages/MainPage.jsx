import React, { useState } from 'react';
import styles from '../styles/MainPage.module.css';

const usuarios = [
    "Juan", "Ana", "Pedro", "Lucía", "Carlos", // Agregar más usuarios según sea necesario
];

const tickets = [
    "Ticket 1", "Ticket 2", "Ticket 3", "Ticket 4", // Agregar más tickets según sea necesario
];

const delayPerPurchase = 3000; // 3 segundos por operación

const TicketPurchaseSimulator = () => {
    const [log, setLog] = useState([]);

    const buyTicket = (user, ticket) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`${user} ha comprado el ${ticket}`);
            }, delayPerPurchase);
        });
    };

    const startPurchase = async () => {
        setLog([]);
        while (usuarios.length > 0 && tickets.length > 0) {
            const user = usuarios.shift(); // Sacamos el primer usuario
            const ticket = tickets.shift(); // Sacamos el primer ticket

            const result = await buyTicket(user, ticket);
            setLog(log => [...log, result]);
        }

        if (usuarios.length > 0 && tickets.length === 0) {
            setLog(log => [...log, `No hay más tickets disponibles para ${usuarios.length} usuarios restantes.`]);
        } else if (usuarios.length === 0 && tickets.length > 0) {
            setLog(log => [...log, `No hay más usuarios para los tickets restantes.`]);
        }
    };

    return (
        <div className={styles.body}>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a className={styles.navItem} href="#intro">Home</a>
                    <a className={styles.navItem} href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA">Eventos</a>
                    <a className={styles.navItem} href="https://mdbootstrap.com/docs/standard/">Suscripciones</a>
                </div>
            </nav>
            <div className={styles.container}>
                <h1>Simulación de Compra de Tickets fila única</h1>
                <button onClick={startPurchase} className={styles.button} data-mdb-ripple-init="true">
                    Iniciar Simulación
                </button>
                <div className={styles.log}>
                    {log.map((entry, index) => (
                        <p key={index}>{entry}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TicketPurchaseSimulator;