import { useEffect, useState } from 'react';
import { Post } from './Post';

export function Posts() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        setPost(posts);
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((json) => setPost(json))
  //     .catch((error) => alert(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        post.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
}
