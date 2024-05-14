import { data } from "../data";
import EventCar from "./EventCar";
const EventList: React.FC = () => {
  return (
    <ul className="event-list">
      {data.map(({ title, description, event_date, organizer }) => (
        <EventCar title={title} description={description} event_date={event_date} organizer={organizer} />
      ))}
    </ul>
  );
};
export default EventList;
