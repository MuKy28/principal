import React, {useState} from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, senha})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <div>
                <form className="Formulario" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input className="inputFormulario" type='email' placeholder='Insira seu Email'  autoComplete="email" id="email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Senha</label>
                        <input className="inputFormulario" type='password' placeholder='Insira sua Senha' autoComplete="current-password" id = "password"onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <button className="btnFormulario">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login