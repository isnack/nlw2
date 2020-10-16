import  React, { useState, FormEvent } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import { useAuth } from "../../contexts/auth";
import api from "../../services/api"
import "./styles.css"
import { Redirect } from 'react-router-dom';

const Login = () =>{
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function handleLoginForm(e:FormEvent) {
    e.preventDefault()    
    api.post('/login',{
        email,
      password
    }).then(result => {
        console.log(result)
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
       
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }


    return (
        <div id="page-login">
            <PageHeader title="Página de Autenticação" description="É necessário logar para dar aulas ou aprender em nossa plataforma !!" />   
            <main id="container">
                <form action="">
                    <Input label="Usuário" name="user"  onChange={(e)=> { setEmail(e.target.value)}} />
                    <Input label="Senha" name="password" type="password" onChange={(e)=> { setPassword(e.target.value)}} />
                <button id="button-login" onClick={handleLoginForm} >Entrar</button>
                </form>
           
           </main>       
        </div>
       
    )
}

export default Login
