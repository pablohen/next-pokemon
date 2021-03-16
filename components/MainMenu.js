import React from 'react';
import Link from 'next/link';

const MainMenu = () => {
  return (
    <nav className="flex bg-white justify-between p-4">
      <span className="font-semibold">
        <Link href="/">
          <a>Next-Pokémon</a>
        </Link>
      </span>
      <ul className="flex space-x-2">
        <li>
          <Link href="/pokedex">
            <a className="hover:underline">Pokédex</a>
          </Link>
        </li>
        <li>
          <Link href="/types">
            <a className="hover:underline">Types</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
