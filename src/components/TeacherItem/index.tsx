import  React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
import TeacherSchedules, { schedules } from '../TeacherSchedules'
import "./styles.css"
import api from '../../services/api';

export interface Teacher {
    id:number,
    avatar: string,
    bio:string,
    cost:number,
    name :string,
    subject: string,
    whatsapp:string,
    schedules:[schedules]
}

interface TeacherItemProps{
    teacher:Teacher
}

const TeacherItem :React.FC<TeacherItemProps> = ({teacher}) =>{

    function createNewConnection(){
        api.post('connections',{
            user_id:teacher.id
        })
    }

    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
           <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
           </div>
        </header>

        <p>{teacher.bio}</p>
        
        <div><TeacherSchedules schedules={teacher.schedules}/></div>
        <footer>
            <p>Preço/hora
                <strong>{teacher.cost}</strong>
            </p>
            <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </a>

        </footer>
    </article>
    )
}

export default TeacherItem