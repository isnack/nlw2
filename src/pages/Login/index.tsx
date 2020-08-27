import  React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import "./styles.css"

const Login = () =>{
    return (
        <div id="page-login">
            <PageHeader title="Página de Autenticação" description="É necessário logar para dar aulas ou aprender em nossa plataforma !!" />   
            <main id="container">
                <form action="">
                    <Input label="Usuário" name="user" />
                    <Input label="Senha" name="password" />
                <button id="button-login" >Entrar</button>
                </form>
           
           </main>       
        </div>
       
    )
}

export default Login
