import { useState } from 'react';
import styles from '../styles/LoginStyles.module.css'; // Importa el CSS Module

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validación simple
    if (!email || !password) {
    setError('Por favor, completa todos los campos.');
    setLoading(false);
    return;
    }

    try {
      // Llamada a la API para autenticación
    const response = await fetch('http://localhost:5173/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
    } else {
        setError(data.message || 'Error en el inicio de sesión. Por favor, intenta más tarde.');
    }
    } catch {
    setError('Error en el inicio de sesión. Por favor, intenta más tarde.');
    } finally {
    setLoading(false);
    }
};

const goToRegister = () => {
    window.location.href = '/register'; // Redirigir a la página de registro
};

return (
    <div className={styles['login-container']}>
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div>
        <label htmlFor="password">Contraseña:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        {error && <p className={styles['error-message']}>{error}</p>}
        <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
    </form>
        <button onClick={goToRegister} className={styles['register-button']}>
            ¿No tienes una cuenta? Regístrate
    </button>
    </div>
);
};

export default Login;
