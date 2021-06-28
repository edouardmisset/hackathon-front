import Card from '../components/Card';

export default function UserPage() {
  return (
    <div className="m-4 p-2 md:p-4">
      <div className="flex flex-col justify-center items-center w-full ">
        <img
          alt="Placeholder"
          className="block rounded-full"
          src="https://picsum.photos/64/64/?random"
        />
        <p className="ml-2 text-sm">Author Name</p>
      </div>
      <h2 className="p-2 md:p-4">My events</h2>
      <Card />
    </div>
  );
}
