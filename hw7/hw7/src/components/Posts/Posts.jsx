import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .finally(() => setLoad(false));
  }, [postId]);

  return (
    <div>
      <h1>Автор: {postId}</h1>
      {load ? (
        <h1>Загрузка...</h1>
      ) : (
        <div>
          {comments.map((user) => (
            <div>
              <p>name: {user.name}</p>
              <p>
                email: <a href={"mailto:" + user.email}>{user.email}</a>
              </p>
              <p>
                body:{" "}
                {user.body.length < 30
                  ? user.body
                  : user.body.slice(0, 30) + "..."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
