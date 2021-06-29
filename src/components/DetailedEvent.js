import './DetailedEvent.css';
import './button.css';
import API from '../APIClient';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';

export default function DetailedEvent() {
  const [eventInfo, setEventInfo] = useState({});

  const {
    title = 'Awesome event',
    avatarUrl = 'https://picsum.photos/32/32/?random',
    author = 'John Doe',
    categories = ['Web Design'],
    location = 'Lyon',
    date = new Date().toLocaleDateString(),
    duration = 2,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Vitae nunc sed velit dignissim sodales. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Dictum sit amet justo donec. Diam vel quam elementum pulvinar etiam. Diam volutpat commodo sed egestas egestas. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Ut sem nulla pharetra diam sit. Cras tincidunt lobortis feugiat vivamus at augue.',
  } = eventInfo;

  const { id } = useParams();

  useEffect(() => {
    API.get(`/events/${parseInt(id, 10)}`)
      .then((res) => res.data)
      .then(setEventInfo)
      .catch(console.error);
  }, [id]);

  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
        <h2 className="text-lg">{title}</h2>
        <div className="flex flex-row items-center w-full ">
          <img
            alt="Placeholder"
            className="block rounded-full"
            src={avatarUrl}
          />
          <p className="ml-2 text-sm">{author}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 md:p-4">
        <p className="text-grey-darker text-sm">
          {dayjs(date).format('DD/MM/YYYY HH:mm')} -{' '}
          {parseInt(duration / 60, 10)}h
        </p>
        <p className="text-grey-darker text-sm">{location} </p>
      </div>

      <p className="text-black p-2 md:p-4">{description}</p>

      <div className="px-6 pt-4 pb-2">
        {categories.length &&
          categories.map((category) => (
            <span
              key={category}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{category}
            </span>
          ))}
      </div>
      <div className="flex items-center justify-center leading-none p-2 md:p-4">
        <button type="button" className="btn btn-green ">
          Register
        </button>
      </div>
    </article>
  );
}
