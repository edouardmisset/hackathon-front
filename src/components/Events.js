/* eslint-disable */
import { useState, useEffect } from 'react';
import API from '../APIClient';
import Event from './Event';

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

  return (
    <div className="flex items-center flex-col justify-center p-5">
      <div className="titre ">
        <h1 className="mt-6 text-center text-3xl font-extrabold m-16">
          Evènements à venir
        </h1>
      </div>
      <br />

      <ul>
        {eventsList &&
          eventsList.map(
            ({ id, name, image, categories, location, date, duration }) => (
              <li key={id}>
                <Event
                  name={name}
                  image={image}
                  categories={categories}
                  location={location}
                  date={date}
                  duration={duration}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
}
