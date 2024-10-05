import { pool } from "../database/db.js";

const getTicket = async (userId) => {
    const query =
        "Select name_event,date_event,site_event,ID_user FROM ticket INNER JOIN users ON ticket.id_user=$1 ";
    const values = [userId];

    const { rows } = await pool.query(query, values);
    return rows;
};

const getTickets = async () => {
    const query = "Select * FROM ticket";

    const { rows } = await pool.query(query);
    return rows;
};

const getUser = async (userId) => {
    const query = "Select * FROM users WHERE id =$1";
    const values = [userId];
    const { rows } = await pool.query(query, userId);
    return rows;
};

const getUsers = async () => {
    const query = "Select * FROM users";

    const { rows } = await pool.query(query);
    return rows;
};
