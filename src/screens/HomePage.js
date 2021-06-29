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
      <h2 className="text-center text-lg">Recent Events</h2>
      <Events eventList={recentEvents} />
      <h2 className="text-center text-lg">Popular Events</h2>
      <Events eventList={popularEvents} />
      <h2 className="text-center text-lg">My Events</h2>
    </div>
  );
}
