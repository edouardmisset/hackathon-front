import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './button.css';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function LoginForm() {
  const { createProfile } = useContext(CurrentUserContext);
  const [password, setPassword] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const confirm = (form) => {
    createProfile(form);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-8 lg:px-8 p-5">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl font-gamelle font-extrabold dark:text-white">
            Create your account
          </h2>
          <h3 className="mt-6 text-center text-sm font-gamelle dark:text-white">
            <span style={{ color: 'red' }}>*</span> mandatory fields.
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(confirm)}
          className="mt-8 space-y-6"
          action="send"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex">
            <div className="w-1/2 mr-1 mb-3">
              <label htmlFor="firstName" className="dark:text-white">
                firstname<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Croc"
                {...register('firstName')}
              />
            </div>
            <div className="w-1/2 ml-1">
              <label htmlFor="lastName" className="dark:text-white">
                Lastname<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Blanc"
                {...register('lastName')}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email-address" className="dark:text-white">
              Email<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              placeholder="croc.blanc@exemple.com"
              {...register('email')}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="dark:text-white">
              Password<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className="appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              required
              placeholder="********"
              {...register('password', {
                required: 'this is a required',
                minLength: {
                  value: 8,
                },
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-green">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
