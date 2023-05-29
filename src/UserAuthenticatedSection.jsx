import { useContext } from 'react';
import { LogInUser } from './LogInUser';
import { AppContext } from './AppContext';

export const UserAuthenticatedSection = () => {
  const { username, logOut } = useContext(AppContext);
  return (
    <>
      <p>
        <b>Usuario: </b> {username}
      </p>
      {username === '' ? <LogInUser /> : <button onClick={logOut}>Log out</button>}
    </>
  );
};
