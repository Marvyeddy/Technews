import CategoryList from '@/components/CategoryList';
import Posts from '@/components/Posts';
import { postData } from '@/data';

export default function Home() {
  return (
    <>
      <CategoryList />
      {postData && postData.length > 0 ? (
        postData.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            content={post.content}
            author={post.author}
            category={post.category}
            date={post.date}
            link={post.links || []}
            authorEmail={'test@email.com'}
            title={post.title}
            thumbnail={post.thumbnail}
          />
        ))
      ) : (
        <h2 className='py-6'>No post</h2>
      )}
    </>
  );
}
