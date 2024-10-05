import styles from '../styles/RegisterStyles.module.css'; // Importa el CSS Module

const Register = () => {
return (
    <div className={styles['register-container']}>
    <h2>Registro</h2>
    <form>
        <input type="text" placeholder="Rut" />
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Teléfono" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Registrar" />
    </form>
    </div>
);
};

export default Register;


