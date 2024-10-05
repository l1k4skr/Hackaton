import React, { useState } from 'react';
import styles from './MainPage.module.css';

const usuarios = [
    { nombre: "Juan", tipoTicket: "VIP" },
    { nombre: "Ana", tipoTicket: "General" },
    { nombre: "Pedro", tipoTicket: "VIP" },
    // Agregar más usuarios según sea necesario
];

const ticketsPorTipo = {
    VIP: ["VIP Ticket 1", "VIP Ticket 2", "VIP Ticket 3"],
    General: ["General Ticket 1", "General Ticket 2", "General Ticket 3", "General Ticket 4"],
    Preferencial: ["Preferencial Ticket 1", "Preferencial Ticket 2"],
};

const delayPerPurchase = 3000; // 3 segundos por operación

const TicketPurchaseSimulator = () => {
    const [log, setLog] = useState([]);

    const buyTicket = (usuario, ticket) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`${usuario} ha comprado el ${ticket}`);
            }, delayPerPurchase);
        });
    };

    const processQueue = async (tipoTicket, colas) => {
        let queueLog = [`Cola ${tipoTicket}`];

        while (colas[tipoTicket].length > 0 && ticketsPorTipo[tipoTicket].length > 0) {
            const usuario = colas[tipoTicket].shift();
            const ticket = ticketsPorTipo[tipoTicket].shift();
            const result = await buyTicket(usuario.nombre, ticket);
            queueLog.push(result);
        }

        if (colas[tipoTicket].length > 0 && ticketsPorTipo[tipoTicket].length === 0) {
            queueLog.push(`No hay más tickets disponibles para ${colas[tipoTicket].length} usuarios restantes en la cola ${tipoTicket}.`);
        } else if (colas[tipoTicket].length === 0 && ticketsPorTipo[tipoTicket].length > 0) {
            queueLog.push(`No hay más usuarios en la cola ${tipoTicket} para los tickets restantes.`);
        }

        setLog(log => [...log, ...queueLog]);
    };

    const startPurchase = () => {
        setLog([]);
        const colas = {
            VIP: [],
            General: [],
            Preferencial: [],
        };
        usuarios.forEach(usuario => {
            colas[usuario.tipoTicket].push(usuario);
        });
        Object.keys(colas).forEach(tipoTicket => {
            processQueue(tipoTicket, colas);
        });
    };

    return (
        <div className={styles.body}>
            <h1>Simulación de Compra de Tickets filas diferenciadas</h1>
            <button onClick={startPurchase} type="button" className="btn btn-primary">
                Iniciar Simulación
            </button>
            <div className={styles.log}>
                {log.map((entry, index) => (
                    <div key={index} className={styles.queue}>
                        {entry}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketPurchaseSimulator;