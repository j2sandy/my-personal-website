import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { wellnessData } from "../../data/wellnessData";

const localizer = momentLocalizer(moment);

export default function CalendarPage({ darkMode }) {
  // Convert wellnessData activities into calendar events
  const events = wellnessData.plannedActivities.map(activity => {
    const start = moment(`${activity.date} ${activity.time}`, "YYYY-MM-DD HH:mm").toDate();
    const end = moment(start).add(1, "hour").toDate(); // default 1 hour duration
    return {
      title: activity.title,
      start,
      end
    };
  });

  return (
    <div className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-semibold mb-4">Wellness Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week", "day"]}
        popup
      />
    </div>
  );
}
