import React from 'react';
import Link from 'next/link';

const MainMenu = () => (
  <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 bg-white justify-between p-4">
    <span className="font-semibold">
      <Link href="/">
        <button type="button">Next-Pokémon</button>
      </Link>
    </span>
    <ul className="flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0">
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
      <li>
        <Link href="/natures">
          <button type="button" className="hover:underline">
            Natures
          </button>
        </Link>
      </li>
      <li>
        <Link href="/berries">
          <button type="button" className="hover:underline">
            Berries
          </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainMenu;
