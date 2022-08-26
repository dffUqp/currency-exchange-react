import { useState } from 'react';

export const UseFetching = (callBack) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callBack();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
