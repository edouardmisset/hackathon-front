import React, { useRef, useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentEventContext } from '../contexts/CurrentEventContext';
import API from '../APIClient';

export default function EventForm() {
  const [event, setEvent] = useState(false);
  const [tagList, setTagList] = useState(false);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [newSkills, setNewSkills] = useState([]);
  const { createEvent } = useContext(CurrentEventContext);
  const avatarUploadRef = useRef();
  const { register, handleSubmit, setValue } = useForm();

  const handleChangeToggle = () => {
    setEvent(!event);
  };

  const onSubmit = (form) => {
    // console.log(form);
    createEvent({ ...form, ownerId: 1, popularity: 0 });
  };

  const handleAvatarFileInputChange = (e) => {
    if (e.target.files[0]) {
      setValue('file', URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    API.get(`events/tags`)
      .then((res) => {
        setTagList(res.data);
      })
      .catch((err) => console.log(err));

    API.get(`/profiles`)
      .then((res) => {
        setCurrentSkills(res.data.currentSkills);
        setNewSkills(res.data.skillsToAcquire);
      })
      .catch((err) => console.log(err));
  }, []);

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
              {...register('name')}
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
              {...register('description')}
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
              {...register('location')}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="online">Presential ?</label>
              <br />
              <input
                type="checkbox"
                onClick={handleChangeToggle}
                {...register('online')}
              />
            </div>
            <div>
              <label htmlFor="date">choose your date</label>
              <br />
              <input type="date" {...register('date')} />
            </div>
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <select {...register('duration')}>
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
              {...register('file')}
            />
          </div>
          <div>
            {tagList && (
              <>
                <label htmlFor="tag">Choose the tag for this event : </label>
                <select {...register('tag')}>
                  {tagList.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>

          {currentSkills && (
            <>
              <legend>Choose your current skills linked to this event :</legend>
              {currentSkills.map((skill) => (
                <div className="m-1">
                  <label key={skill.id}>
                    <input
                      className="m-2"
                      type="checkbox"
                      value={skill.id}
                      name="chosenSkills"
                      ref={skill.id}
                      {...register('chosenSkills')}
                    />
                    {skill.name}
                  </label>
                </div>
              ))}
            </>
          )}

          {newSkills && (
            <>
              <legend>
                Choose the skills you would like to acquire by this event :
              </legend>
              {newSkills.map((skill) => (
                <div className="m-1">
                  <label key={skill.id}>
                    <input
                      className="m-2"
                      type="checkbox"
                      value={skill.id}
                      name="chosenNewSkills"
                      ref={skill.id}
                      {...register('chosenNewSkills')}
                    />
                    {skill.name}
                  </label>
                </div>
              ))}
            </>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn btn-green"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
