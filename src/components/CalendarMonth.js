import Scheduler from "devextreme-react/scheduler";

function CalendarMonth({
  handleAppointmentAdd,
  handleCellClick,
  calendarEvents,
  // currentDate,
}) {
  return (
    <Scheduler
      onAppointmentAdded={handleAppointmentAdd}
      onCellClick={handleCellClick}
      className="calendar-month"
      timeZone="America/New_York"
      dataSource={calendarEvents}
      views={["week", "month"]}
      defaultCurrentView="month"
      defaultCurrentDate={new Date()}
      // currentDate={currentDate}
      height={800}
      startDayHour={9}
    />
  );
}

export default CalendarMonth;
