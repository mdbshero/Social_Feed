const Post = (props) => {
  return (
    <div>
      {props.parentPosts.map((post) => {
        return (
            <div>
          <h3>{post.name}</h3>
          <p>{post.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
