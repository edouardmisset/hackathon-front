import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import API from '../APIClient';

export default function Profile({ id = 1 }) {
  const [userDetails, setUserDetails] = useState([]);
  const [currentSkill, setCurrentSkills] = useState({});
  const [newSkill, setNewSkill] = useState({});

  useEffect(() => {
    API.get(`/profiles/1`)
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
    <div className="m-4 p-2 md:p-4">
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex items-center">
          <div>
            <img
              alt={`${userDetails.firstName} ${userDetails.lastName}`}
              className="w-60 rounded-full m-5"
              src={
                userDetails.avatar
                  ? userDetails.avatar
                  : `https://picsum.photos/500/500?random=${userDetails.id + 1}`
              }
            />
          </div>
          <div className="flex flex-col">
            <p className="ml-2 text-4xl m-2">{`${userDetails.firstName} ${userDetails.lastName}`}</p>
            <p className="ml-2 text-sm m-2">{userDetails.email}</p>
          </div>
        </div>
        {userDetails.currentSkills.length > 0 ? (
          <>
            <p className="ml-2 text-sm">My skills :</p>
            <ul>
              {userDetails.currentSkills.map((skill) => (
                <li key={skill.id}>
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
                        handleChangeLevel({ ...skill, level: e.target.value })
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
        {userDetails.skillsToAcquire.length > 0 ? (
          <>
            <p className="ml-2 text-sm">Skills I need to acquire :</p>
            <ul>
              {userDetails.skillsToAcquire.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>{' '}
          </>
        ) : null}
      </div>

      <h1 className="flex justify-center">
        Enter the name of your new current skill :{' '}
      </h1>

      <form
        key="onSubmitNewCurrentSkill"
        onSubmit={handleSubmit(onSubmitNewCurrentSkill)}
        className="flex justify-center items-center mt-2 "
        action="send"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="w-96">
          <label htmlFor="newCurrentSkill">
            <input
              {...register('newCurrentSkill', { required: true })}
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Please enter the name of the skill you want to add"
            />
            {errors.newCurrentSkill && <p>This is required</p>}
          </label>
        </div>
        <div className="w-32">
          <label htmlFor="chooseLevel">
            Choose the level :
            <select
              {...register('chooseLevel', { required: true })}
              defaultValue="1"
              className="cursor-pointer appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {'12345'.split('').map((star) => (
                <option key={star} value={star}>
                  {'⭐'.repeat(star)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <button className="bg-gray w-20 h-10 rounded" type="submit">
            Save
          </button>
        </div>
      </form>
      <br />
      <br />
      <h1 className="flex justify-center">
        Enter the name of a new skill you need to acquire :
      </h1>
      <form
        key="onSubmitNewSkillToAcquire"
        onSubmit={handleSubmit2(onSubmitNewSkillToAcquire)}
        className="flex justify-center items-center mt-2 "
        action="send"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="w-96">
          <label htmlFor="newSkillToAcquire">
            <input
              {...register2('newSkillToAcquire', { required: true })}
              type="text"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Please enter the name of the new skill you need to acquire"
            />
            {errors2.newSkillToAcquire && <p>This is required</p>}
          </label>
        </div>

        <div>
          <button className="bg-gray w-20 h-10 rounded" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    <h1 className="flex justify-center">
      Désolé, nous n'avons pas trouvé les informations
    </h1>
  );
}
