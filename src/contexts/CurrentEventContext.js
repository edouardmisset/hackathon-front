import React from 'react';
import { createContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import API from '../APIClient';

export const CurrentEventContext = createContext();

export default function CurrentEventContextProvider({ children }) {
  const { addToast } = useToasts();

  const createEvent = async (form) => {
    console.log('form   ', form);
    try {
      await API.post('/events', form);
      addToast('Your event had been successfully created !', {
        appearance: 'success',
      });
    } catch (err) {
      addToast('There was an error during the creation of event.', {
        appearance: 'error',
      });
    }
  };
  return (
    <div>
      <CurrentEventContext.Provider
        value={{
          createEvent,
        }}
      >
        {children}
      </CurrentEventContext.Provider>
    </div>
  );
}
