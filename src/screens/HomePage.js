import { useEffect, useState } from 'react';
import API from '../APIClient';
import Events from '../components/Events';

export default function HomePage() {
  const [recentEvents, setRecentEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);

  useEffect(() => {
    API.get('/events/popular').then((res) => {
      setPopularEvents(res.data);
    });
    API.get('/events/upcoming').then((res) => {
      setRecentEvents(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center text-lg">Home</h2>
      <h3>Recent Events</h3>
      <Events eventList={recentEvents} />
      <h3>Popular Events</h3>
      <Events eventList={popularEvents} />
      <h3>My Events</h3>
    </div>
  );
}
