import axios from "axios";

const Comments = ({ comments, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.name} {}<button>Delete book</button>
        </li>
      ))}
    </ul>
  );
};

Comments.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:3001/api/books");
    const comments = res.data;
    return { comments };
  } catch (error) {
    return { error };
  }
};

export default Comments;
