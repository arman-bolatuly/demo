import { useState } from "react";
import axios from "axios";

const Comments = ({ comments, error }) => {
  const [modifiedData, setModifiedData] = useState({
    id: "",
    title: "",
    year: "",
  });
  const [errorComments, setErrorComments] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      id: value.id,
      title: value.title,
      year: value.year,
    }));
    console.log(handleChange);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/comments",
        modifiedData
      );
      console.log(response);
    } catch (error) {
      setErrorComments(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Comments</h3>
        <br />
        <label>
          Id:
          <input
            type="number"
            name="id"
            value={modifiedData.id}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={modifiedData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={modifiedData.year}
            onChange={handleChange}
          />
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Comments.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:3000/api/comments");
    const comments = res.data;
    return { comments };
  } catch (error) {
    return { error };
  }
};

export default Comments;
