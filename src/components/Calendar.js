import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Scheduler from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React from "react";

// function Calendar() {
//   //   return <Scheduler id="scheduler">{/* Configuration goes here */}</Scheduler>;
//   return <div>Calendar</div>;
// }

// export default Calendar;

import { data } from "./data.js";

const currentDate = new Date();
const views = ["day", "week", "month"];

class Calendar extends React.Component {
  render() {
    return (
      <Scheduler
        timeZone="America/New_York"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
      />
    );
  }
}

export default Calendar;
