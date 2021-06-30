import './DetailedEvent.css';
import './button.css';
import API from '../APIClient';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import { useToasts } from 'react-toast-notifications';

export default function DetailedEvent() {
  const [eventInfo, setEventInfo] = useState({});

  const {
    name,
    image,
    eventTags = [],
    location,
    date,
    duration,
    description,
    owner,
    eventCurrentSkills = [],
    eventSkillsToAcquire = [],
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
    API.post('/register', { userId: 1, eventId: id })
      .then(() => {
        addToast('Successfully registered for this event', {
          appearance: 'success',
        });
      })
      .catch((error) => {
        addToast('Something went wrong 😕', {
          appearance: 'error',
        });
        console.error(error);
      });
  };

  return (
    <>
      {Object.keys(eventInfo).length !== 0 ? (
        <article className="overflow-hidden rounded-lg shadow-lg max-w-prose m-auto my-4">
          <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
            <div className="flex flex-row items-center w-full ">
              <img
                className="w-full"
                src={
                  image ? image : `https://picsum.photos/200/100?random=${id}`
                }
                alt={image}
              />
            </div>
          </div>
          <h2 className="flex justify-center font-bold text-xl mb-2">{name}</h2>
          {/* <div className="flex flex-row justify-between p-2 md:p-4"> */}
          <p className="ml-2 text-lg">{`by: ${owner.firstName} ${owner.lastName}`}</p>
          <p className="ml-2 text-grey-darker text-lg">
            {`Location: ${location}`}{' '}
          </p>
          {/* </div> */}
          <p className="text-grey-darker text-sm p-2 md:p-4">
            {dayjs(date).format('DD/MM/YYYY HH:mm')} -{' '}
            {parseInt(duration / 60, 10)}h
          </p>

          <p className="text-black p-2 md:p-4">{description}</p>

          <div className="px-6 pt-4 pb-2">
            <h3>Topics that the organizer will discuss :</h3>
            {eventCurrentSkills.length &&
              eventCurrentSkills.map((currentSkill) => (
                <span
                  key={currentSkill.skill.id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  💡 {currentSkill.skill.name}
                </span>
              ))}
          </div>
          <div className="px-6 pt-4 pb-2">
            <h3>Topics on which the organizers would like to have help :</h3>
            {eventSkillsToAcquire.length &&
              eventSkillsToAcquire.map((skillToAcquire) => (
                <span
                  key={skillToAcquire.skill.id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  ❓ {skillToAcquire.skill.name}
                </span>
              ))}
          </div>
          <div className="px-6 pt-4 pb-2">
            {eventTags.length &&
              eventTags.map((category) => (
                <span
                  key={category.id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{category.tag.name}
                </span>
              ))}
          </div>

          <div className="flex items-center justify-center leading-none p-2 md:p-4">
            <button
              type="button"
              className="btn btn-green"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
        </article>
      ) : null}
    </>
  );
}
