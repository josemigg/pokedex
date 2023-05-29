import { useState, useContext } from 'react';
import { AppContext } from './AppContext';

export const LogInUser = () => {
  const { logIn } = useContext(AppContext);
  const [currentUsername, setCurrentUsername] = useState('');

  const handleChange = (e) => {
    setCurrentUsername(e.target.value);
  };

  const handleClick = () => {
    logIn(currentUsername);
  };

  return (
    <div>
      Introduce tu usuario
      <input onChange={handleChange} value={currentUsername} />
      <button onClick={handleClick}>Log in</button>
    </div>
  );
};
