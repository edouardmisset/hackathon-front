const dayjs = require("dayjs");

export default function SingleEvent({ event }) {
  console.log(event);

  return (
    <>
      {/* <NavLink
              className="flex items-center bg-white shadow-lg px-5 py-2 m-5"
              to={{
                pathname: `/product-info/?id=${event.id}`,
                state: { background: location },
              }}
            > */}

      <p className="font-bold text-base md:text-xl ">{event.name}</p>
      <img
        className=" flex-none h-20 w-20 object-cover rounded-xl mr-5 md:h-40 md:w-40 "
        src={
          event.image
            ? event.image
            : `https://picsum.photos/200/300?random=${event.id + 1}`
        }
        alt={event.name}
      />
      <div>
        <p className="font-bold text-base md:text-xl ">{event.description}</p>
        <p className="text-sm md:text-base">
          {dayjs(event.date).format("DD/MM/YYYY HH:mm")}
        </p>
        <p className="text-sm md:text-base">{event.duration} minutes</p>
        <p className="text-sm md:text-base">{event.location}</p>
      </div>
      <br />
      <br />
      {/* </NavLink> */}
    </>
  );
}
