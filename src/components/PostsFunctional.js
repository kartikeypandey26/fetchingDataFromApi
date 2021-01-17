import { useState, useEffect } from "react";

const PostsFunctional = () => {
  const [postData, setPostData] = useState([]);

  const getData = () => {
    var url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="heading">Posts by Functional Component</h1>
      {postData.map((data) => (
        <div key={data.id} className="each-post-box">
          <h5 className="title">{data.id + ". " + data.title}</h5>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsFunctional;
