import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import API from '../APIClient';

export default function Profile({ id = 1 }) {
  const [userDetails, setUserDetails] = useState([]);
  const [currentSkill, setCurrentSkills] = useState({});
  const [newSkill, setNewSkill] = useState({});

  useEffect(() => {
    API.get(`/profiles`)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, [currentSkill, newSkill]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const onSubmitNewCurrentSkill = async (formCurrent) => {
    await API.post(`/skills/current`, { ...formCurrent, userId: id })
      .then(() => {})
      .catch((err) => console.error(err));
    setCurrentSkills(formCurrent);
  };

  const onSubmitNewSkillToAcquire = async (formAcquire) => {
    await API.post(`/skills/new`, { ...formAcquire, userId: id })
      .then(() => {})
      .catch((err) => console.error(err));
    setNewSkill(formAcquire);
  };

  const handleChangeLevel = async (skill) => {
    await API.post(`/skills/currentchange`, { ...skill })
      .then(() => {})
      .catch((err) => console.error(err));
    setCurrentSkills(skill);
  };
  return userDetails.length !== 0 ? (
    <div className="flex flex-col items-center p-2 md:p-4">
      <div className="flex w-full justify-around mb-20 mt-10">
        <div className="flex flex-col items-center">
          <div>
            <img
              alt={`${userDetails.firstName} ${userDetails.lastName}`}
              className="w-60 rounded-full"
              src={
                userDetails.avatar
                  ? userDetails.avatar
                  : `https://picsum.photos/500/500?random=${userDetails.id + 1}`
              }
            />

            <div className="flex flex-col">
              <p className="ml-2 lg:text-5xl md:text-4xl text-3xl m-2">{`${userDetails.firstName} ${userDetails.lastName}`}</p>
              <p className="ml-2 text-lg m-2">{userDetails.email}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-2/4">
          <div className="flex flex-col">
            <h2 className="titles">My skills</h2>
            {userDetails.currentSkills.length > 0 ? (
              <>
                <ul className="text-xl ">
                  {userDetails.currentSkills.map((skill) => (
                    <li key={skill.id} className="flex justify-between">
                      {skill.name}
                      <span> {'⭐'.repeat(skill.level)}</span>
                      <span className="ml-5">
                        <label htmlFor={skill.name}>Choose the level :</label>
                        <select
                          key={skill.id}
                          {...register(skill.name, { required: true })}
                          defaultValue={skill.level}
                          className="cursor-pointer"
                          onChange={(e) =>
                            handleChangeLevel({
                              ...skill,
                              level: e.target.value,
                            })
                          }
                        >
                          {'12345'.split('').map((star) => (
                            <option key={star} value={star}>
                              {'⭐'.repeat(star)}
                            </option>
                          ))}
                        </select>
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="subtitles flex">Do you want to add a skill ?</h1>

              <form
                key="onSubmitNewCurrentSkill"
                onSubmit={handleSubmit(onSubmitNewCurrentSkill)}
                className="form"
                action="send"
                method="POST"
              >
                <div className="flex items-end mt-2">
                  <input type="hidden" name="remember" defaultValue="true" />

                  <div className="mr-2 w-96">
                    <label htmlFor="newCurrentSkill">
                      <input
                        {...register('newCurrentSkill', { required: true })}
                        type="text"
                        className="input"
                        placeholder="Please enter the name of the skill you want to add"
                      />
                      {errors.newCurrentSkill && <p>This is required</p>}
                    </label>
                  </div>

                  <div>
                    <label htmlFor="chooseLevel">
                      <select
                        {...register('chooseLevel', { required: true })}
                        defaultValue="1"
                        className="select"
                      >
                        {'12345'.split('').map((star) => (
                          <option key={star} value={star}>
                            {'⭐'.repeat(star)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="ml-2">
                    <button className="btn btn-green" type="submit">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col mt-5">
              <h2 className="titles">What I want to learn</h2>

              {userDetails.skillsToAcquire.length > 0 ? (
                <>
                  <ul className="text-xl mt-2">
                    {userDetails.skillsToAcquire.map((skill) => (
                      <li key={skill.id}>{skill.name}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>

          <div>
            <h1 className="subtitles flex">
              Do you want to add a new skill to learn ?
            </h1>

            <form
              key="onSubmitNewSkillToAcquire"
              onSubmit={handleSubmit2(onSubmitNewSkillToAcquire)}
              className="flex mt-2"
              action="send"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />

              <div className="w-96 mr-2">
                <label htmlFor="newSkillToAcquire">
                  <input
                    {...register2('newSkillToAcquire', { required: true })}
                    type="text"
                    className="input"
                    placeholder="Please enter the name of the new skill you need to acquire"
                  />
                  {errors2.newSkillToAcquire && <p>This is required</p>}
                </label>
              </div>

              <div>
                <button className="btn btn-green" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="flex justify-center">
      Désolé, nous n'avons pas trouvé les informations
    </h1>
  );
}
