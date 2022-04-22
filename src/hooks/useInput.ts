import React from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue);

  const handleReset = () => setValue('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
};

export default useInput;
