import React from 'react';
import Link from 'next/link';

const MainMenu = () => (
  <nav className="flex bg-white justify-between p-4">
    <span className="font-semibold">
      <Link href="/">
        <button type="button">Next-Pokémon</button>
      </Link>
    </span>
    <ul className="flex space-x-2">
      <li>
        <Link href="/pokedex">
          <button type="button" className="hover:underline">
            Pokédex
          </button>
        </Link>
      </li>
      <li>
        <Link href="/moves">
          <button type="button" className="hover:underline">
            Moves
          </button>
        </Link>
      </li>
      <li>
        <Link href="/types">
          <button type="button" className="hover:underline">
            Types
          </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainMenu;
