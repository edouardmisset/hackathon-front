import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

export default function Event({
  name,
  image,
  categories = [],
  location,
  date,
  duration,
  id,
  currentSkills = [],
  skillsToAcquire = [],
}) {
  return (
    <NavLink to={`/events/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
        <img
          className="w-full"
          src={image ? image : `https://picsum.photos/200/100?random=${id}`}
          alt={image}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="text-grey-darker text-sm">
            {dayjs(date).format('DD/MM/YYYY HH:mm')} - Duration :
            {parseInt(duration / 60, 10)}h
          </div>
          <div className="text-grey-darker text-sm">{location} </div>
        </div>

        <div className="px-6 pt-4 pb-2">
          <h3>Topics that the organizer will discuss :</h3>
          {currentSkills.length &&
            currentSkills.map((currentSkill) => (
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
          {skillsToAcquire.length &&
            skillsToAcquire.map((skillToAcquire) => (
              <span
                key={skillToAcquire.skill.id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                ❓ {skillToAcquire.skill.name}
              </span>
            ))}
        </div>
        <div className="px-6 pt-4 pb-2">
          {categories.length &&
            categories.map((category) => (
              <span
                key={category.id}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{category.tag.name}
              </span>
            ))}
        </div>
      </div>
    </NavLink>
  );
}
