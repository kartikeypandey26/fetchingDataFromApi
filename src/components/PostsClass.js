import React from "react";

class PostsClass extends React.Component {
  state = {
    postData: [],
  };

  getData = () => {
    var url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ postData: data });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1 className="heading">Posts by Class Component</h1>
        {this.state.postData.map((data) => (
          <div key={data.id} className="each-post-box">
            <h5 className="title">{data.id + ". " + data.title}</h5>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsClass;
