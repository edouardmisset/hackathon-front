/* eslint-disable */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import API from '../APIClient';
import SingleEvent from './SingleEvent';

export default function Events() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    API.get('/events')
      .then((res) => {
        console.log(res.data);
        setEventsList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return eventsList.length !== 0 ? (
    <div className="flex items-center flex-col justify-center p-5">
      <div className="titre ">
        <h1 className="mt-6 text-center text-3xl font-extrabold m-16">
          Evènements à venir
        </h1>
      </div>
      <br />

      <ul>
        {eventsList &&
          eventsList.map((event) => (
            <li key={event.id}>
              <SingleEvent event={event} />
            </li>
          ))}
      </ul>
    </div>
  ) : (
    <h1 className="flex justify-center">
      Désolé, il n'y a aucun évènement à venir
    </h1>
  );
}
