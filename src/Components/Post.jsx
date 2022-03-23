const Post = (props) => {
  return (
    <td>
      {props.parentPosts.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.name}</h3>
            <p>{post.comment}</p>
          </div>
        );
      })}
    </td>
  );
};

export default Post;
