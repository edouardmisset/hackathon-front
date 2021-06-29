import Event from './Event';

export default function Events({ eventList }) {
  console.log(eventList);
  return (
    <div className="flex flex-col justify-center p-5 ">
      <ul className="flex w-full overflow-x-scroll">
        {eventList.length &&
          eventList.map(
            ({
              id,
              name,
              image,
              eventTags,
              eventCurrentSkills,
              eventSkillsToAcquire,
              location,
              date,
              duration,
            }) => (
              <li className="min-w-max" key={id}>
                <Event
                  name={name}
                  image={image}
                  categories={eventTags}
                  currentSkills={eventCurrentSkills}
                  skillsToAcquire={eventSkillsToAcquire}
                  location={location}
                  date={date}
                  duration={duration}
                  id={id}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
}
