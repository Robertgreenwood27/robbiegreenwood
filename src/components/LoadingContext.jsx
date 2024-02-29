import React, { createContext, useContext, useState } from 'react';

// Create the context with an initial value
const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
});

// Provide the context
export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the context
export const useLoading = () => useContext(LoadingContext);
