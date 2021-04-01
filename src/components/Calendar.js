// import "devextreme/dist/css/dx.common.css";
// import "devextreme/dist/css/dx.light.css";
// import Scheduler from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useEffect, useState } from "react";
import "../css/Calendar.css";
import CalendarDay from "./CalendarDay";
import CalendarMonth from "./CalendarMonth";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarEvents, setCalendarEvents] = useState(null);
  console.log("calendarEvents: ", calendarEvents);
  const url = "http://localhost:3000/calendar";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(setCalendarEvents);
    }
  }, []);

  function handleCellClick(e) {
    setCurrentDate(e.cellData.startDate);
    console.log(e);
  }

  function handleAppointmentAdd(e) {
    console.log("e: ", e);
    // e.preventDefault();
    const appointmentData = e.appointmentData;
    console.log("appointmentData: ", appointmentData);
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(appointmentData),
      }).then((response) => response.json());
      // .then((newData) => {
      //   const newEvents = [...calendarEvents];
      //   newEvents.push(newData);
      //   setCalendarEvents(newEvents);
      // });
    }
  }

  function handleCurrentDayChange(e) {
    setCurrentDate(e);
  }

  return (
    <section className="calendar-container">
      <CalendarMonth
        handleAppointmentAdd={handleAppointmentAdd}
        handleCellClick={handleCellClick}
        calendarEvents={calendarEvents}
        // currentDate={currentDate}
      />
      <CalendarDay
        handleAppointmentAdd={handleAppointmentAdd}
        handleCurrentDayChange={handleCurrentDayChange}
        currentDate={currentDate}
        calendarEvents={calendarEvents}
      />
    </section>
  );
}

export default Calendar;
