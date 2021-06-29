import Event from './Event';

export default function Events({ eventList }) {
  return (
    <div className="flex flex-col justify-center">
      <ul className="flex w-full overflow-x-scroll">
        {eventList.length &&
          eventList.map(
            ({ id, name, image, categories, location, date, duration }) => (
              <li className="min-w-max" key={id}>
                <Event
                  name={name}
                  image={image}
                  categories={categories}
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
