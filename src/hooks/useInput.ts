import React from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
