import React, { useState, useEffect } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
// import '../../assets/plugins/fullcalendar/fullcalendar.min.css';
import {getBookings} from '../../service'

const eventsd = [
    {
        title: 'All Day Event',
        start: '2018-07-01',
        className: 'bg-info',
    },
    {
        title: 'Long Event',
        start: '2018-07-07',
        end: '2018-07-10',
        className: 'bg-danger'
    },
    {
        id: 999,
        title: 'Product Event',
        start: '2018-09-09T03:00:00',
        end: '2018-09-09T10:00:00',
        className: 'bg-cyan'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: '2018-10-23T16:00:00',
        className: 'bg-azura'
    },
    {
        title: 'Conference',
        start: '2018-09-19',
        end: '2018-08-20',
        className: 'bg-green'
    },
    {
        title: 'Meeting',
        start: '2018-09-13T08:30:00',
        end: '2018-09-13T17:30:00',
        className: 'bg-red'
    },
    {
        title: 'Lunch',
        start: '2018-08-12T12:00:00',
        className: 'bg-blush'
    },
    {
        title: 'Meeting with Clients',
        start: '2018-09-18T14:30:00',
        className: 'bg-red'
    },
    {
        title: 'Happy Hour',
        start: '2018-09-013T17:30:00',
        className: 'bg-pink'
    },
    {
        title: 'Dinner with Boss',
        start: '2018-09-11T20:00:00',
        className: 'bg-orange'
    },
    {
        title: 'Outing with Friends',
        start: new Date(2021, 4, 24, 14, 30, 0),
        end: new Date(2021, 4, 24, 15, 45, 0),
        className: 'bg-indigo'
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: new Date(2021, 4, 24, 10, 20, 0),
        className: 'bg-blue'
    }
]

function Fullcalender() {

    const headerdata = {
        left: 'title', // you can add today btn
        center: '',
        right: 'month, agendaWeek,agendaDay, prev, next', // you can add agendaDay btn
    }

    const [date, setDate] = useState(new Date());

    const [bookings,setBookings] = useState([])

	const fetchData = async () => {
		let darr = []
		const data = await getBookings(localStorage.getItem('email'))
		for (let index = 0; index < data.result.length; index++) {
            var date = data.result[index].date.split("T")[0].split("-")
            var year = date[0]
            var month = date[1] - 1
            var day = date[2]
            var time = data.result[index].time.split(":")
            var hour = time[0]
            var sec = time[1]
            const currentDate = new Date(year,month,day,hour,sec,0)
            
            const events = {
                title: data.result[index].message,
                start: currentDate,
                className: 'bg-blue'
            }
			darr.push(events)
			
		}
		setBookings([...darr])
		
	}

    console.log(bookings)

    useEffect(() => {
        fetchData()
    },[])


    return (
        <div id="calender">
            <FullCalendar
                id="calendar"
                header={headerdata}
                defaultDate={date}
                droppable={true}
                contentHeight='auto'
                editable={true}
                droppable={true}
                eventLimit={"more"} // allow "more" link when too many events
                selectable={true}
                events={bookings}

            />
        </div>
    );
}

export default Fullcalender;
