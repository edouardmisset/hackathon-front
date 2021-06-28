export default function Card({
  title = 'Awesome event',
  picture = 'https://picsum.photos/100/40/?blur',
  categories = ['Web Design'],
  location = 'Lyon',
  date = new Date().toLocaleDateString(),
  duration = '2h',
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={picture} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex flex-row justify-between p-2 md:p-4">
          <p className="text-grey-darker text-sm">
            {date} - {duration}
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
  );
}
