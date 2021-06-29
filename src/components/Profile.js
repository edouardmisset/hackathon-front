import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import API from '../APIClient';

export default function Profile({ id = 1 }) {
  const [userDetails, setUserDetails] = useState([]);
  // const { setResultsList } = useContext(ResultsContext);

  useEffect(() => {
    API.get(`/profiles/1`)
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const onSubmitNewCurrentSkill = (formCurrent) => {
    alert(JSON.stringify(formCurrent));
  };

  const onSubmitNewSkillToAcquire = (formAcquire) => {
    alert(JSON.stringify(formAcquire));
  };

  return userDetails.length !== 0 ? (
    <div className="m-4 p-2 md:p-4">
      <div className="flex flex-col justify-center items-center w-full ">
        <img
          alt={`${userDetails.firstName} ${userDetails.lastName}`}
          className="block rounded-full"
          src={
            userDetails.avatar
              ? userDetails.avatar
              : `https://picsum.photos/64/64?random=${userDetails.id + 1}`
          }
        />
        <p className="ml-2 text-sm">{`${userDetails.firstName} ${userDetails.lastName}`}</p>
        <p className="ml-2 text-sm">{userDetails.email}</p>
        {userDetails.currentSkills.length > 0 ? (
          <>
            <p className="ml-2 text-sm">My skills :</p>
            <ul>
              {userDetails.currentSkills.map((skill) => (
                <li key={skill.id}>
                  {skill.name}
                  <span> {'⭐'.repeat(skill.level)}</span>
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
      <form
        key="onSubmitNewCurrentSkill"
        onSubmit={handleSubmit(onSubmitNewCurrentSkill)}
        className="flex justify-around items-center mt-8 space-y-6"
        action="send"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="w-96">
          <label htmlFor="newCurrentSkill">
            Enter the name of your new current skill :
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
          <label htmlFor="changeLevel">
            Choose the level :
            <select
              {...register('changeLevel', { required: true })}
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
          <button type="submit">Save</button>
        </div>
      </form>
      <form
        key="onSubmitNewSkillToAcquire"
        onSubmit={handleSubmit2(onSubmitNewSkillToAcquire)}
        className="flex justify-around items-center mt-8 space-y-6"
        action="send"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="w-96">
          <label htmlFor="newSkillToAcquire">
            Enter the name of a new skill you need to acquire :
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
          <button type="submit">Save</button>
        </div>
      </form>

      <h2 className="p-2 md:p-4">My events</h2>
    </div>
  ) : (
    <h1 className="flex justify-center">
      Désolé, nous n'avons pas trouvé les informations
    </h1>
  );
}
