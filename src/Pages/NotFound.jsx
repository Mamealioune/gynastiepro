import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non trouvé!!</h1>
      <p className="text-lg mb-4">Oops! La page que tu veux accéder semble ne pas existé.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
