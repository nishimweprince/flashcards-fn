import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <header className="header_container py-8 px-4 flex items-center justify-between">
      <Link href="/" className="font-black text-[1.5rem] ">
        Nishimwe Flashcards
      </Link>
      <article className="nav_cta">
        <Button value='Create' route='/create' />
      </article>
    </header>
  );
};

export default Navbar;
