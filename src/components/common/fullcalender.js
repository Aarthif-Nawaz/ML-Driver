import React, { useState, useEffect } from 'react';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
// import '../../assets/plugins/fullcalendar/fullcalendar.min.css';
import {getBookings} from '../../service'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {useHistory} from 'react-router-dom'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


function Fullcalender(props) {
    const history = useHistory();
    
    const headerdata = {
        left: 'title', // you can add today btn
        center: '',
        right: 'month, agendaWeek,agendaDay, prev, next', // you can add agendaDay btn
    }

    const [date, setDate] = useState(new Date());

    const [bookings,setBookings] = useState([])

	const fetchData = async () => {
        console.log(props.email)
		let darr = []
		const data = await getBookings(props.email ? props.email : localStorage.getItem('email'))
        if (data.result != "No Data") {
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
                    id : data['result'][index]._id,
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
    },[])

    const showData = (arg) => {
        
        history.push({
            pathname: '/create-paln',
            state : {id : arg.event.id, action : "Update"}
        })
    }

    const handleDateClick = (arg) => {
        history.push({
            pathname: '/create-paln',
            state: {date: arg.date, action : "Create"}
        })
        console.log(arg.dateStr)
        
    }

    const handleMouseEnter = async(arg) => {
        console.log(arg.event.id)
        var messageContent = {
            accepted : "",
            client: "",
            date: "",
            driverName: "",
            email: "",
            from: "",
            to: "",
            time:""
        }
        const data = await getBookings(props.email ? props.email : localStorage.getItem('email'))
        for (let index = 0; index < data.result.length; index++) {
            if (data['result'][index].message == arg.event.title && data['result'][index]._id == arg.event.id){
                console.log(data['result'][index])
                messageContent = {
                    accepted : data['result'][index].accepted,
                    client: data['result'][index].client,
                    date: data['result'][index].date,
                    driverName: data['result'][index].driverName,
                    email: data['result'][index].email,
                    from: data['result'][index].fromAddress,
                    to: data['result'][index].toAddress,
                    time: data['result'][index].time
                }
            }
            
        }
        console.log(arg.event.title)
        tippy(arg.el, {
            content: "Message : "+ "  "+arg.event.title + " , " + "Accepted : "+ "  "+messageContent.accepted + ", " + "Client Name : "+ "  "+messageContent.client+ "," + "Date : "+ "  "+messageContent.date+ " ," + "Driver Name : "+ "  "+messageContent.driverName+ " ," + "Email : "+ "  "+messageContent.email+ " ," + "From Address : "+ "  "+messageContent.from + ", " + "To Address : "+ "  "+messageContent.to+ " , " + "Pick Up Time : "+ "  "+messageContent.time
        });
    }

    


    return (
        <div id="calender">
            <FullCalendar
                id="calendar"
                plugins={[ interactionPlugin, dayGridPlugin ]}
                header={headerdata}
                initialView="dayGridMonth"
                dateClick={(arg) => handleDateClick(arg)}
                defaultDate={date}
                eventClick={showData}
                eventMouseEnter={(arg) => handleMouseEnter(arg)}
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
