import { useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChangeInput];
};

export default useInput;
