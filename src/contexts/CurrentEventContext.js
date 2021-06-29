import React from 'react';
import { createContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import API from '../APIClient';

export const CurrentEventContext = createContext();

export default function CurrentEventContextProvider({ children }) {
  const { addToast } = useToasts();

  const createEvent = async (form) => {
    try {
      await API.post('/events/1', form);
      addToast('votre event a ete crée avec succes.', {
        appearance: 'success',
      });
    } catch (err) {
      addToast('Il y a eu une erreur lors de la création de votre event.', {
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
