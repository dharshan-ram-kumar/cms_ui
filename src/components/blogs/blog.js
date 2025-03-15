import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Bad Response From Server");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      });
  }, []);

  return (
    <div>
      {blogs.map((blog) => {
        const imageUrl = `http://localhost:1337${blog.featuredimage?.formats?.thumbnail?.url}`;
        return (
          <div key={blog.id} className={styles.blogCard}>
            <h3 className={styles.blogTitle}>{blog.blogtitle}</h3>
            {imageUrl && (
              <img
                className={styles.blogImage}
                src={imageUrl}
                alt={blog.blogtitle}
              />
            )}
            <div className={styles.blogText}>
              {blog.blogcontent?.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.children?.map((child, childIndex) =>
                    child.bold ? (
                      <h4 key={childIndex}>{child.text}</h4>
                    ) : (
                      <span key={childIndex}>{child.text} </span>
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
