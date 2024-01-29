import ButtonAction from '@/app/components/ButtonAction';

const BloggDetailPage = () => {
  return (
    <div className="border rounded-xl pl-4 pb-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post One Content</p>
    </div>
  );
};

export default BloggDetailPage;
