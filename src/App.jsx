import { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import { Button } from './components/button/Button';
import { UserProfile } from './UserProfile';
import { AppContext, AppContextProvider } from './AppContext';

function App() {
  const { username } = useContext(AppContext);

  return (
    <AppContextProvider>
      <header className='menu'>
        <strong>POKÉDEX</strong>
        <nav>
          <Link to='/'>Listado</Link>
          <Link to='/my-profile'>My profile</Link>
        </nav>
        {username}
      </header>
      <Outlet />
    </AppContextProvider>
  );
}

export default App;
