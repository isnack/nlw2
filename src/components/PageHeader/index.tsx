import  React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import  {useAuthContext}  from "../../contexts/auth";
import "./styles.css"

import backIcon from "../../assets/images/icons/back.svg"
import logoImg from "../../assets/images/logo.svg"
import exitIcon from "../../assets/images/icons/exit.svg"

interface PagerHeaderProps {
    title:string;
    description?: string
}

const PageHeader:React.FC<PagerHeaderProps> = (props) =>{
    const {handleLogout ,isAuthenticated} = useAuthContext();
    
    const handleExit =() =>{      
       handleLogout()
       
    }
    
    useEffect(() => {
      
       
      }, [isAuthenticated]); 
    
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                    {isAuthenticated  && <img src={exitIcon} alt="Sair" onClick={handleExit}/>}
                    
                </div>
               <div className="header-content">
                   <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}
               </div>              
            </header>
    )
}

export default PageHeader