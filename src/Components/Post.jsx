const Post = (props) => {
  return (
    <td>
      <div>
        <h3>{props.post.name}</h3>
        <p>{props.post.comment}</p>
      </div>
    </td>
  );
};

export default Post;
