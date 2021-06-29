import './Article.css';
import './button.css';

export default function Article({
  name = 'Awesome event',
  image = 'https://picsum.photos/32/32/?random',
  author = 'John Doe',
  categories = ['Web Design'],
  location = 'Lyon',
  date = new Date(),
  duration = '2h',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Vitae nunc sed velit dignissim sodales. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Dictum sit amet justo donec. Diam vel quam elementum pulvinar etiam. Diam volutpat commodo sed egestas egestas. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Ut sem nulla pharetra diam sit. Cras tincidunt lobortis feugiat vivamus at augue.',
}) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
        <h2 className="text-lg">{name}</h2>
        <div className="flex flex-row items-center w-full ">
          <img alt="Placeholder" className="block rounded-full" src={image} />
          <p className="ml-2 text-sm">{author}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 md:p-4">
        <p className="text-grey-darker text-sm">
          {date.toLocaleDateString()} - {duration}
        </p>
        <p className="text-grey-darker text-sm">{location} </p>
      </div>

      <p className="text-black p-2 md:p-4">{description}</p>

      <div className="flex px-6 pt-4 pb-2">
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
