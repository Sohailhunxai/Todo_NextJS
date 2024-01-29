import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-200 ">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn">
            <BookOpenCheck color="blue" />
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className=" btn ">
            Create Todo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
