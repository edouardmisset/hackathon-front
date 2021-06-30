import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className='search-plus flex'>
        <SearchBar />
        <NavLink title='Create an event' to={'/create-event'}>

          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon plus feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </NavLink>
      </div>
      <h2 className="titles text-center">Upcoming Events</h2>
      {recentEvents && <Events eventList={recentEvents} />}
      <h2 className="titles text-center">Popular Events</h2>
      <Events eventList={popularEvents} />
      {
        isLoggedIn && !!userEventList.length && (
          <>
            <h2 className="text-center text-lg">My Events</h2>
            <Events eventList={userEventList} />
          </>
        )
      }
    </>
  );
}
