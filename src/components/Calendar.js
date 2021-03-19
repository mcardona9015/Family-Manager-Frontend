// import "devextreme/dist/css/dx.common.css";
// import "devextreme/dist/css/dx.light.css";
import Scheduler from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useEffect, useState } from "react";
import "../css/Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarEvents, setCalendarEvents] = useState(null);
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
        .then(setCalendarEvents)
        .then(console.log("activated"));
    }
  }, []);

  function handleCellClick(e) {
    setCurrentDate(e.cellData.startDate);
  }

  function handleAppointmentAdd(e) {
    console.log("e: ", e);
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
      })
        .then((response) => response.json())
        .then(console.log);
    }
  }

  function handleCurrentDayChange(e) {
    setCurrentDate(e);
  }

  return (
    <section className="calendar-container">
      <Scheduler
        onAppointmentAdded={handleAppointmentAdd}
        onCellClick={handleCellClick}
        className="calendar-month"
        timeZone="America/New_York"
        dataSource={calendarEvents}
        views={["week", "month"]}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={800}
        startDayHour={9}
      />
      <Scheduler
        onCurrentDateChange={handleCurrentDayChange}
        className="calendar-day"
        timeZone="America/New_York"
        dataSource={calendarEvents}
        views={["day"]}
        currentDate={currentDate}
        height={800}
        startDayHour={9}
      />
    </section>
  );
}

export default Calendar;
