import React, { useState, useEffect } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
// import '../../assets/plugins/fullcalendar/fullcalendar.min.css';
import { getDriverBookings } from '../../service'



function DriverFullcalender() {

    const headerdata = {
        left: 'title', // you can add today btn
        center: '',
        right: 'month, agendaWeek,agendaDay, prev, next', // you can add agendaDay btn
    }

    const [date, setDate] = useState(new Date());

    const [bookings, setBookings] = useState([])

    const fetchData = async () => {
        let darr = []
        const data = await getDriverBookings(localStorage.getItem('email'))
        if (data.result != "No Data") {
            for (let index = 0; index < data.result.length; index++) {
                var date = data.result[index].date.split("T")[0].split("-")
                var year = date[0]
                var month = date[1] - 1
                var day = date[2]
                var time = data.result[index].time.split(":")
                var hour = time[0]
                var sec = time[1]
                const currentDate = new Date(year, month, day, hour, sec, 0)

                const events = {
                    title: data.result[index].message,
                    start: currentDate,
                    className: 'bg-blue'
                }
                darr.push(events)

            }
            setBookings([...darr])
        }
    }

    console.log(bookings)

    useEffect(() => {
        fetchData()
    }, [])


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

export default DriverFullcalender;
