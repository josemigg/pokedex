import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PokemonList from './PokemonList';
import PokemonTypes from './PokemonTypes';
import PokemonDetails from './PokemonDetails';
import { UserProfile } from './UserProfile';
import { AppContextProvider } from './AppContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <PokemonList /> },
      {
        path: '/types',
        element: <PokemonTypes />
      },
      {
        path: 'pokemon/:pokemonId',
        element: <PokemonDetails />
      },
      {
        path: 'my-profile',
        element: <UserProfile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
