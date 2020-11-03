import  React from 'react';
import './styles.css'
import {convertMinutesToHour} from '../../utils/convertTimes'
import DaysOfWeek from './../../utils/daysOfWeek'
export interface schedules{
        id:number,
        week_day:number,
        from:number,
        to:number,
        class_id:number
        [key: string]: any;
}


 interface TeacherScheduleProps{
    schedules:[schedules]
}


const TeacherSchedule :React.FC<TeacherScheduleProps> = (schedules) =>{
    return(
       <React.Fragment>
           <div id="main">
           {DaysOfWeek.map((weekDay,index) =>(
                <div key={index} className="schedulesItens">
                <div className="day">
                <p>Dia</p>
                <p>{weekDay.label}</p>
                </div>
                <div className="scheduleItem">
                    <p>Horário</p>
           <p>{convertMinutesToHour(getSchedule(schedules,weekDay.value,"from"))} - {convertMinutesToHour(getSchedule(schedules,weekDay.value,"to"))}</p>
                </div>
            </div>
           ))}
             </div> 
       
           </React.Fragment>
    )
}
 function  getSchedule(arr:TeacherScheduleProps, weedDayValue:any ,nameAttribute:any):number {
      
    var result  = arr.schedules.find(schedule => schedule.week_day == weedDayValue  );
    
    return result? result[nameAttribute]: 0 ; // or undefined
  
  }

export default TeacherSchedule