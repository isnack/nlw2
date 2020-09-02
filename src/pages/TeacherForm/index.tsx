import  React ,{ useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from "../../assets/images/icons/warning.svg"
import './styles.css';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import api from '../../services/api';



const TeacherForm = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems,setscheduleItems] = useState([
        {week_day:0 , from:"", to:"" }
    ])
    
    function addNewScheduleItem() {
        setscheduleItems([
            ...scheduleItems,
            {week_day:0 , from:"", to:"" },
        ])
    }

    function handleCreateClass(e:FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            email,
            password,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:scheduleItems
        }).then(()=>{
            alert('Cadastro Realizado com sucesso')
            history.push('/')
        }).catch(()=>{
            alert('Ocorreu um erro na Requisição')
        })
    }

    function setScheduleItemValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem,index)=>{
            if(position === index){
                return {...scheduleItem, [field]:value}
            }
            return scheduleItem
        })
        setscheduleItems(updatedScheduleItems)
    }

    return (
       <div className="container" id="page-teacher-form">
       <PageHeader
         title="Que incrível que você quer dar aulas."
         description="O primeiro passo é  preencher esse formulário de inscrição"
        />           
       <main>
           <form onSubmit={handleCreateClass}>
           <fieldset>
               <legend>Seus dados</legend>

               <Input name="name"
                label="Nome completo"
                value={name}
                onChange={(e)=> { setName(e.target.value)} }
                />
                 <Input name="email"
                label="Email"
                value={email}
                onChange={(e)=> { setEmail(e.target.value)} }
                />
                 <Input name="password"
                 type="password"
                label="Senha"
                value={password}
                onChange={(e)=> { setPassword(e.target.value)} }
                />
                <Input name="avatar"
                 label="Avatar"
                 value={avatar}
                 onChange={(e)=> { setAvatar(e.target.value) }}
                 />
                <Input name="whatsapp"
                 label="Whatsapp"
                 value={whatsapp}
                 onChange={(e)=> { setWhatsapp(e.target.value) }}
                 />   
                <TextArea name="bio"
                 label="Biografia"
                 value={bio}
                 onChange={(e)=> { setBio(e.target.value) }}
                 />            
           </fieldset>

           <fieldset>
               <legend>Sobre a aula</legend>
               <Select name="subject" label="Matéria"  value={subject}
                 onChange={(e)=> { setSubject(e.target.value) }} options={[
                   {value:"Artes", label:"Artes"},
                   {value:"Matemática", label:"Matemática"}

               ]}/>
                <Input name="cost"
                 label="Custo da sua hora por aula"
                 value={cost}
                 onChange={(e)=> { setCost(e.target.value) }}
                 />
           </fieldset>
           
           <fieldset>
               <legend>
                   Horários disponíveis
                   <button type="button" onClick={addNewScheduleItem}>
                       + Novo horário
                   </button>
               </legend>

              
              {scheduleItems.map((scheduleItem, index) =>{
                  return(
                    <div key={scheduleItem.week_day} className="schedule-item">
                    <Select  name="week_day"
                     label="Dia da Semana"
                     value={scheduleItem.week_day}
                     onChange={e => setScheduleItemValue(index,'week_day',e.target.value)}
                      options={[
                        {value:"0", label:"Domingo"},
                        {value:"1", label:"Segunda-feira"},
                        {value:"2", label:"Terça-Feira"},
                        {value:"3", label:"Quarta-Feira"},
                        {value:"4", label:"Quinta-Feira"},
                        {value:"5", label:"Sexta-Feira"},
                        {value:"6", label:"Sabado"}
     
                    ]}/>
                     <Input name="from"
                      label="Das"
                       type="time"
                       value={scheduleItem.from}
                       onChange={e => setScheduleItemValue(index,'from',e.target.value)}
                       />
                    <Input name="to"
                     label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index,'to',e.target.value)}
                      />
                    </div>
                  )
              })}
              
               
           </fieldset>

           <footer>
               <p>
                   <img src={warningIcon} alt="Aviso importante"/>
                   Importante <br/>
                   Preencha todos os dados
               </p>
               <button type="button" onClick={handleCreateClass} >
                   Salvar Cadastro
               </button>
           </footer>
           </form>
       </main>
       </div>
    )
}


export default TeacherForm