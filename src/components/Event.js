import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

export default function Event({
  name = 'Awesome event',
  image = 'https://picsum.photos/100/40/?blur',
  categories = ['Web Design'],
  location = 'Lyon',
  date = new Date(),
  duration = 2,
  id = 1,
}) {
  return (
    <NavLink to={`/events/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
        <img className="w-full" src={image} alt={image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="flex flex-row justify-between p-2 md:p-4">
            <p className="text-grey-darker text-sm">
              {dayjs(date).format('DD/MM/YYYY HH:mm')} -{' '}
              {parseInt(duration / 60, 10)}h
            </p>
            <p className="text-grey-darker text-sm">{location} </p>
          </div>
        </div>
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
      </div>
    </NavLink>
  );
}
