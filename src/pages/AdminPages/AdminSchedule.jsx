// import { useState } from "react";
// import { formatDate } from "@fullcalendar/core";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import {
//   INITIAL_EVENTS,
//   createEventId,
// } from "../../components/AdminComponents/event-utils";

// export default function DemoApp() {
//   const [weekendsVisible, setWeekendsVisible] = useState(true);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   function handleWeekendsToggle() {
//     setWeekendsVisible(!weekendsVisible);
//   }

//   function handleDateSelect(selectInfo) {
//     let title = prompt("Please enter a new title for your event");
//     let calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay,
//       });
//     }
//   }

//   function handleEventClick(clickInfo) {
//     if (
//       confirm(
//         `Are you sure you want to delete the event '${clickInfo.event.title}'`,
//       )
//     ) {
//       clickInfo.event.remove();
//     }
//   }

//   function handleEvents(events) {
//     setCurrentEvents(events);
//   }

//   return (
//     <div className=" bg-white">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         initialView="dayGridMonth"
//         editable={true}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         weekends={weekendsVisible}
//         initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//         select={handleDateSelect}
//         eventContent={renderEventContent} // custom render function
//         eventClick={handleEventClick}
//         eventsSet={handleEvents} // called after events are initialized/added/changed/removed
//         /* you can update a remote database when these fire:
//           eventAdd={function(){}}
//           eventChange={function(){}}
//           eventRemove={function(){}}
//           */
//       />
//     </div>
//   );
// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }

// // function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
// //   return <></>;
// // }

// // function SidebarEvent({ event }) {
// //   return (
// //     <li key={event.id}>
// //       <b>
// //         {formatDate(event.start, {
// //           year: "numeric",
// //           month: "short",
// //           day: "numeric",
// //         })}
// //       </b>
// //       <i>{event.title}</i>
// //     </li>
// //   );
// // }


export default function AdminSchedule() {
  return (
    <div></div>
  )
}
