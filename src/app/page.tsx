import Navbar from '@/app/components/Navbar';
import PostCard from '@/app/components/PostCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
