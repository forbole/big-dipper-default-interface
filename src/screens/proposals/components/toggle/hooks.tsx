import { useState } from 'react';

export const useToggleHook = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return {
    handleChange,
    isToggled,
  };
};
