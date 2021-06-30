import './DetailedEvent.css';
import './button.css';
import API from '../APIClient';
import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import { useToasts } from 'react-toast-notifications';
import history from '../history';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function DetailedEvent() {
  const [eventInfo, setEventInfo] = useState({});
  const { profile } = useContext(CurrentUserContext);
  const {
    name = 'Awesome event',
    image = 'https://picsum.photos/32/32/?random',
    author = 'John Doe',
    tags = ['Web Design'],
    location = 'Lyon',
    date = new Date().toLocaleDateString(),
    duration = 2,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.',
  } = eventInfo;

  const { id } = useParams();

  const { addToast } = useToasts();

  useEffect(() => {
    API.get(`/events/${parseInt(id, 10)}`)
      .then((res) => res.data)
      .then(setEventInfo)
      .catch(console.error);
  }, [id]);

  const handleClick = () => {
    API.post('/register', { userId: profile.id, eventId: id })
      .then(() => {
        addToast('Successfully registered for this event', {
          appearance: 'success',
        });
        setTimeout(() => {
          history.push('/')
        }, 500)
      })
      .catch((error) => {
        addToast('Something went wrong 😕', {
          appearance: 'error',
        });
        console.error(error);
      });
  };

  return (
    <article className="overflow-hidden rounded-lg shadow-lg max-w-prose m-auto my-4">
      <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
        <div className="flex flex-row items-center w-full ">
          <img alt={name} className="block" src={image} />
        </div>
      </div>
      <h2 className="text-lg flex justify-center">{name}</h2>
      <div className="flex flex-row justify-between p-2 md:p-4">
        <p className="ml-2 text-sm">{`by: ${author}`}</p>
        <p className="text-grey-darker text-sm">{`${location}`} </p>
      </div>
      <p className="text-grey-darker text-sm p-2 md:p-4">
        {dayjs(date).format('DD/MM/YYYY HH:mm')} - {parseInt(duration / 60, 10)}
        h
      </p>

      <p className="text-black p-2 md:p-4">{description}</p>

      <div className="px-6 pt-4 pb-2">
        {tags.length &&
          tags.map((category) => (
            <span
              key={category}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{category}
            </span>
          ))}
      </div>
      <div className="flex items-center justify-center leading-none p-2 md:p-4">
        <button type="button" className="btn btn-green" onClick={handleClick}>
          Register
        </button>
      </div>
    </article>
  );
}
