import  React, { useState,useEffect ,useRef , FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from "../../components/Input"
import "./styles.css"
import Select from '../../components/Select';
import api from '../../services/api';
import ReactPaginate from 'react-paginate';

const TeacherList = () => {
    const [subject, setSubject] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const firstUpdate = useRef(true);

   

    const  searchTeachersPaginate = async () =>{
       
        try {
         
            const response = await api.get('classesPaginate', {
                params:{
                    subject,
                    week_day:weekDay,
                    time,
                    page:page,
                    quantityRegisters:2
                    
                }
            })
            setTeachers(response.data.data)   
            
            console.log(await response.data)
        } catch (error) {
            alert(error)
        }
       
    }

    const handlePageClick = (data:any) => {
        let selected = data.selected +1;
        console.log(selected)
        setPage(selected)
      };
    

     useEffect(() => {
         if(firstUpdate.current){
           
            firstUpdate.current = false;
            
         }else{

           searchTeachersPaginate()
           
         }
    }, [page])   

    async function searchTeachers(e:FormEvent){
        e.preventDefault()
        try {
         
            const response = await api.get('classesPaginate', {
                params:{
                    subject,
                    week_day: weekDay,
                    time,
                    page:page,
                    quantityRegisters:2
                }
            })
            console.log(response.data.pagination)
            setTeachers(response.data.data)
            setPageCount(response.data.pagination.lastPage)
            
        } catch (error) {
            alert(error)
        }
       
    }



    return (
        <div id="page-teacher-list" className="container">
          <PageHeader title="Estes são os proffys disponíveis">
          <form  id="search-teachers">    

                  <Select 
                  name="subject"
                  label="Matéria"
                  value={subject}
                  onChange={e=>{setSubject(e.target.value)}}
                    options={[
                   {value:"Artes", label:"Artes"},
                   {value:"Matemática", label:"Matemática"}

               ]}/>
                   <Select 
                   name="week_day"
                   label="Dia da Semana"
                   value={weekDay}
                   onChange={e=>{setWeekDay(e.target.value)}}
                    options={[
                   {value:"0", label:"Domingo"},
                   {value:"1", label:"Segunda-feira"},
                   {value:"2", label:"Terça-Feira"},
                   {value:"3", label:"Quarta-Feira"},
                   {value:"4", label:"Quinta-Feira"},
                   {value:"5", label:"Sexta-Feira"},
                   {value:"6", label:"Sabado"}

               ]}/>
                <Input type="time"
                 name="time"
                 label="Hora"
                 value={time}
                 onChange={e=>{setTime(e.target.value)}}
                  />                
               <button onClick={searchTeachers}>
                   Buscar
               </button>
            </form>
          </PageHeader>

          <main>
              {teachers.map((teacher:Teacher)=>{
                  return  <TeacherItem key={teacher.id} teacher={teacher} /> 
              })}

       
     
            <div>
            <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Próximo'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
                 
          activeClassName={'active'}
          containerClassName={'teacher-paginate'}

        />
     
            </div>
                        
          </main>
        </div>
    )
}

export default TeacherList