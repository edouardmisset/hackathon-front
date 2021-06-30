import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentEventContext } from '../contexts/CurrentEventContext';
import API from '../APIClient';

export default function EventForm() {
  const [event, setEvent] = useState(false);
  const [tagList, setTagList] = useState(false);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [newSkills, setNewSkills] = useState([]);
  const { createEvent } = useContext(CurrentEventContext);
  const { register, handleSubmit, setValue } = useForm();

  const handleChangeToggle = () => {
    setEvent(!event);
  };

  const onSubmit = (form) => {
    createEvent({
      ...form,
      date: new Date(`${form.date}T${form.time}`),
      ownerId: 1,
      popularity: 0,
    });
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
    <div className="flex items-center justify-center w-1/2 m-auto   border shadow-2xl">
      <div className="max-w-md w-full">
        <h1 className="titles">Add a new event</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8"
          action="send"
          method="POST"
        >
          <div className="mt-5">
            <label htmlFor="name" className="subtitles">
              Name
            </label>
            <input
              type="text"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="name"
              {...register('name')}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="description" className="subtitles">
              Description
            </label>
            <input
              type="textarea"
              required
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="describe your project"
              {...register('description')}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="location" className="subtitles">
              Location
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
            <div className="mt-5">
              <label htmlFor="online" className="subtitles">
                Online event ?
              </label>
              <br />
              <input
                type="checkbox"
                onClick={handleChangeToggle}
                {...register('online')}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="date" className="subtitles">
                Choose your date
              </label>
              <br />
              <input type="date" {...register('date')} />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="duration" className="subtitles">
              Duration
            </label>
            <select {...register('duration')} className="ml-5">
              <option key={60} value={60}>
                1h
              </option>
              <option key={90} value={90}>
                1h30
              </option>
              <option key={120} value={120}>
                2h
              </option>
              <option key={150} value={150}>
                2h30
              </option>
              <option key={180} value={180}>
                3h
              </option>
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="time" className="subtitles">
              choose your start time
            </label>
            <br />
            <input type="time" {...register('time')} />
          </div>
          <div className="mt-5">
            <label htmlFor="image" className="mt-5 subtitles">
              Add a picture (optional) :
            </label>
            <input
              className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              type="text"
              placeholder="put your picture url"
              {...register('image')}
            />
          </div>
          <div className="mt-5">
            {tagList && (
              <>
                <label htmlFor="tag" className="subtitles">
                  Choose the tag for this event :{' '}
                </label>
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
            <div className="mt-5">
              <legend className="subtitles">
                Choose your current skills linked to this event :
              </legend>
              {currentSkills.map((skill) => (
                <div key={skill.id}>
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
            </div>
          )}

          {newSkills && (
            <div className="mt-5">
              <legend className="subtitles">
                Choose the skills you want to learn during this event :
              </legend>
              {newSkills.map((skill) => (
                <div key={skill.id} className="m-1">
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
            </div>
          )}
          <div>
            <button
              type="submit"
              className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn btn-green"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
