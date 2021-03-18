// import "devextreme/dist/css/dx.common.css";
// import "devextreme/dist/css/dx.light.css";
import Scheduler from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useState } from "react";
import "../css/Calendar.css";

// function Calendar() {
//   //   return <Scheduler id="scheduler">{/* Configuration goes here */}</Scheduler>;
//   return <div>Calendar</div>;
// }

// export default Calendar;

import { data } from "./data.js";

const views = ["day", "week", "month"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log("currentDate: ", currentDate);

  function handleClick(e) {
    setCurrentDate(e.cellData.startDate);
  }

  function handleAppointmentAdd(e) {
    console.log("e: ", e);
  }

  return (
    <section className="calendar-container">
      <Scheduler
        onAppointmentAdded={handleAppointmentAdd}
        onCellClick={handleClick}
        className="calendar-month"
        timeZone="America/New_York"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={800}
        startDayHour={9}
      />
      <Scheduler
        className="calendar-day"
        timeZone="America/New_York"
        dataSource={data}
        views={["day"]}
        currentDate={currentDate}
        height={800}
        startDayHour={9}
      />
    </section>
  );
}

export default Calendar;
