import Scheduler from "devextreme-react/scheduler";

function CalendarDay({
  handleAppointmentAdd,
  handleCurrentDayChange,
  calendarEvents,
  currentDate,
}) {
  return (
    <Scheduler
      onAppointmentAdded={handleAppointmentAdd}
      onCurrentDateChange={handleCurrentDayChange}
      className="calendar-day"
      timeZone="America/New_York"
      dataSource={calendarEvents}
      views={["day"]}
      currentDate={currentDate}
      height={800}
      startDayHour={9}
    />
  );
}

export default CalendarDay;
