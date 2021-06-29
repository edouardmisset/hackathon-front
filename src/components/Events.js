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

      {eventsList.length > 0 ? (
        <ul>
          {eventsList.map(
            ({ name, id, image, categories, location, date, duration }) => (
              <li key={id}>
                <Event
                  image={image}
                  name={name}
                  categories={categories}
                  location={location}
                  date={date}
                  duration={duration}
                />
              </li>
            )
          )}
        </ul>
      ) : (
        <h1 className="flex justify-center">
          Désolé, il n'y a aucun évènement à venir
        </h1>
      )}
    </div>
  );
}
