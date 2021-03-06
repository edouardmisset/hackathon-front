import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './button.css';

export default function SignIn() {
  const { login } = useContext(CurrentUserContext);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="max-w-md w-full m-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">Log In</h2>
        </div>
        <form
          onSubmit={handleSubmit(login)}
          className="mt-6"
          action="send"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="mb-3">
            <label htmlFor="email-address">Email</label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-none relative block w-full px-3 py-2 border border-gray-300 sm:text-sm"
              placeholder="croc.blanc@exemple.com"
              {...register('email')}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password">password</label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              // eslint-disable-next-line react/jsx-no-duplicate-props
              type={showPassword ? 'text' : 'password'}
              className="rounded-none relative block w-full px-3 py-2 border border-gray sm:text-sm"
              placeholder="********"
              {...register('password')}
            />
            <FontAwesomeIcon
              className="cursor-pointer flex mt-3"
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <input
            name="stayConnected"
            className="mr-3"
            type="checkbox"
            {...register('stayConnected')}
          />
          <label>Remember me</label>
          <div>
            <button
              type="submit"
              className="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn btn-green"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
