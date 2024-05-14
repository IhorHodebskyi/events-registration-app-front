import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventList from "./components/EventList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
    </Routes>
  );
}

export default App;
