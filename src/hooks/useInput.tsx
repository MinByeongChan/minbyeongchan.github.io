import { useState } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handler, useState];
};

export default useInput;
