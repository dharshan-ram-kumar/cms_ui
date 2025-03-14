import React from "react";
import fetch from "isomorphic-fetch";
import BlogListItem from "./blog-list-item";
class Bloglist extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:1339/api/blogs?populate=*")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((data) => {
        if (data?.data) {
          this.setState({ blogs: data.data });
        } else {
          this.setState({ blogs: [] });
        }
      });
  }
  render() {
    return (
      <div>
        {this.state.blogs.map((blog) => (
          <BlogListItem
            key={blog.id}
            blogtitle={blog.blogtitle}
            blogcontent={blog.blogcontent}
            featuredimage={blog.featuredimage}
            categories={blog.categories}
          />
        ))}
      </div>
    );
  }
}

export default Bloglist;
