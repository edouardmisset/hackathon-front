/* eslint-disable */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import API from "../APIClient";

export default function Events() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    API.get(`/events`)
      .then((res) => {
        setEventsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return eventsList.length !== 0 ? (
    <div className="flex items-center flex-col justify-center p-5">
      <div className="titre ">
        <h1 className="mt-6 text-center text-3xl font-extrabold m-16">
          Evènements à venir
        </h1>
      </div>
      <br />

      <ul>
        {eventsList.map((event) => (
          <li key={event.id}>
            {/* <NavLink
              className="flex items-center bg-white shadow-lg px-5 py-2 m-5"
              to={{
                pathname: `/product-info/?id=${event.id}`,
                state: { background: location },
              }}
            > */}
            <img
              className=" flex-none h-20 w-20 object-cover rounded-xl mr-5 md:h-40 md:w-40 "
              src={event.image}
              alt={event.name}
            />
            <div>
              <p className="font-bold text-base md:text-xl ">{event.name}</p>
              <p className="font-bold text-base md:text-xl ">
                {event.description}
              </p>
              <p className="text-sm md:text-base">{event.date}</p>
              <p className="text-sm md:text-base">{event.duration}</p>
              <p className="text-sm md:text-base">{event.location}</p>
            </div>
            {/* </NavLink> */}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1 className="flex justify-center">
      Désolé, il n'y a aucun évènement à venir
    </h1>
  );
}
