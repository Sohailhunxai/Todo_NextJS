import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-200 ">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className=" btn btn-ghost">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
