import { useContext, useEffect, useState } from 'react';
import API from '../APIClient';
import Events from '../components/Events';
import SearchBar from '../components/SearchBar';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function HomePage() {
  const [recentEvents, setRecentEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const { isLoggedIn, userEventList } = useContext(CurrentUserContext);

  useEffect(() => {
    API.get('/events/popular').then((res) => {
      setPopularEvents(res.data);
    });
    API.get('/events/upcoming').then((res) => {
      setRecentEvents(res.data);
    });
  }, []);

  return (
    <>
      <SearchBar />
      <h2 className="text-center text-lg">Recent Events</h2>
      <Events eventList={recentEvents} />
      <h2 className="text-center text-lg">Popular Events</h2>
      <Events eventList={popularEvents} />
      {isLoggedIn && !!userEventList.length && (
        <>
          <h2 className="text-center text-lg">My Events</h2>
          <Events eventList={userEventList} />
        </>
      )}
    </>
  );
}
