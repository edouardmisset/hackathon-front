import "./Article.css";
import "./button.css";

export default function Article() {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
        <h2 className="text-lg">Title</h2>
        <div className="flex flex-row items-center w-full ">
          <img
            alt="Placeholder"
            className="block rounded-full"
            src="https://picsum.photos/32/32/?random"
          />
          <p className="ml-2 text-sm">Author Name</p>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2 md:p-4">
        <p className="text-grey-darker text-sm">Date - duration</p>
        <p className="text-grey-darker text-sm">Location </p>
      </div>

      <p className="text-black p-2 md:p-4">Description</p>

      <div className="flex items-center justify-center leading-none p-2 md:p-4">
        <button type="button" className="btn btn-green ">
          Register
        </button>
      </div>
    </article>
  );
}
