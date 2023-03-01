import {useState} from 'react'
import FullCalendar from  "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import intertionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import { formatDate } from '@fullcalendar/core'

function Calendar(){
    const [currentEvents, setCurrentEvents] = useState([])

    const  handleDateClick = (selected) =>{
        const title = prompt('Enter a new title for your event')
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        
        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    };

    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure you want to delete the event.${selected.event.title}`)){
            selected.event.remove()
        }
    }
    return(
        <div className='calendar-section flex  justify-between'>
            <div className='calendar-sidebar p-2'>
                <p className='text-gray-300'>Plans & Events</p>
                <div className='list'>
                    {currentEvents.map((event) => (
                        <div className='bg-emerald-500 rounded-md text-white mb-2 p-1' key={event.id}>
                            <p className='font-semibold text-lg'>{event.title}</p>
                            <p>{formatDate(event.start, {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*Calendar*/}
            <div className='calendar-bar text-white ml-2'>
                <FullCalendar 
                    height ="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        intertionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left:"prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) =>setCurrentEvents(events)}
                    initialEvents={[
                        {id: "1234", title:"All-day event", date:"2023-09-02"},
                        {id: "4525", title:"Timed event", date:"2023-02-17"},
                        {id: "2174", title:"Dental clinic", date:"2023-02-12"},
                        {id: "1125", title:"Utra-sounds", date:"2023-02-16"},
                    ]}
                />
            </div>
        </div>
    )
}


export default Calendar;