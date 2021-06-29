import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { CurrentEventContext } from "../contexts/CurrentEventContext";

export default function EventForm() {
  const [event, setEvent] = useState(false);

  const { createEvent } = useContext(CurrentEventContext);
  const avatarUploadRef = useRef();
  const { register, handleSubmit, setValue } = useForm();
  const handleChangeToggle = () => {
    setEvent(!event);
  };

  const onSubmit = (form) => {
    createEvent(form);
  };

  const handleAvatarFileInputChange = (e) => {
    if (e.target.files[0]) {
      setValue("file", URL.createObjectURL(e.target.files[0]));
    }
  };
  console.log(event);
  return (
    <div className="flex items-center justify-center px-4 sm:px-8 lg:px-8 p-5 border shadow-2xl">
      <div className="max-w-md w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
          action="send"
          method="POST"
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="name"
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="description" className="dark:text-white">
              description
            </label>
            <input
              type="textarea"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="describe your project"
              {...register("description")}
            />
          </div>
          <div>
            <label htmlFor="location" className="dark:text-white">
              location
            </label>
            <input
              type="text"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="location"
              {...register("location")}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="online">Presential ?</label>
              <br />
              <input
                type="checkbox"
                onClick={handleChangeToggle}
                required
                {...register("online")}
              />
            </div>
            <div>
              <label htmlFor="date">choose your date</label>
              <br />
              <input type="date" {...register("date")} />
            </div>
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <select {...register("duration")}>
              <option value={60}>1H</option>
              <option value={90}>1H30</option>
              <option value={120}>2H</option>
              <option value={150}>2H30</option>
              <option value={180}>3H</option>
            </select>
          </div>
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              ref={avatarUploadRef}
              onChange={handleAvatarFileInputChange}
              {...register("file")}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-darkpurple"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
