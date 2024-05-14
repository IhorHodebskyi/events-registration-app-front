import { IPropsData } from "../interface";
const EventCar: React.FC<IPropsData> = ({ title, description, event_date, organizer }) => {
  return (
    <li className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-description">{description}</p>
      <p className="event-date">{event_date}</p>
      <p className="event-organizer">Organizes: {organizer}</p>
    </li>
  );
};
export default EventCar;
