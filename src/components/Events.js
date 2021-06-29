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
    <div className="flex flex-col justify-center p-5 m-16">
      <div className="titre">
        <h1 className="mt-6 text-3xl font-extrabold">Evènements à venir</h1>
      </div>
      <br />

      {eventsList.length > 0 ? (
        <ul className="flex w-5/6">
          {eventsList.map(
            ({ name, id, image, categories, location, date, duration }) => (
              <li className="min-w-max" key={id}>
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
