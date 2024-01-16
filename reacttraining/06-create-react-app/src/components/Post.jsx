import './post.css';

export function Post({ post }) {
  return (
    <div className="postblock">
      <h3 className="postblock__title" id={post.id}>
        {post.title}
      </h3>
      <p className="postblock__p">{post.body}</p>
    </div>
  );
}
