//Importar useState para manejar los datos del formulario
import { useState } from "react";
//Importar useNavigate para navegar entre las rutas
import { useNavigate } from "react-router-dom";
//Importar los estilos del Login
import styles from './Login.module.css';

//Recibimos una función para actualizar el estado del login
function Login({setIsAuthenticated}) {
    //Estado para guardar el nombre de usuario 
    const [username, setUsername] = useState("");
    //Estado para guardar la contraseña
    const [password, setPassword] = useState("");
    //Estado para mostrar mensajes de error
    const [error, setError] = useState("");
    //Creamos la función que permite navegar entre las rutas
    const navigate = useNavigate();
    //Creamos la función que se ejecuta al enviar el formulario
    function handleSubmit(e) {
        //Evitar que la pagina se recargue al enviar el formulario
        e.preventDefault();
        //Comprobamos si los datos son correctos
        if(username === 'admin' && password === '123456'){
            //Indicamos que el usuario inció sesión correctamente
            setIsAuthenticated(true);
            //Navegamos a la pagina de productos
            navigate('/products');
        }else{
            //Mostramos un mensaje si los datos son incorrectos
            setError("Invalid username or password");
        }
    }
    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/*Encabezado del formulario */}
                <div className={styles.header}>
                    <h1>Welcome to the Login</h1>
                    <p>Sign in to your account</p>
                </div>
                {/*Campo de usuario */}
                <div className={styles.field}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                {/*Campo de contraseña*/}
                <div>
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/*Mensaje de error*/}
                {error && (
                    <p className={styles.error}>
                        {error}
                    </p>
                )}
                {/*Botón para iniciar sesión*/}
                <button 
                  type="submit" 
                  className={styles.button}
                >
                    Sign In
                </button>

            </form>

        </div>

    )
}

export default Login;