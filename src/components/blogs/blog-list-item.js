import React from "react";
import styles from "./blog-card.module.css";

const BlogListItem = ({
  blogtitle,
  blogcontent,
  featuredimage,
  categories,
}) => {
  //   const categoryNames = categories?.map((category) => category.categoryname);
  const imageUrl = `http://localhost:1339${featuredimage.formats.thumbnail.url}`;
  return (
    <div className={styles.blogCard}>
      <h3 className={styles.blogTitle}>{blogtitle}</h3>
      <img className={styles.blogImage} src={imageUrl} alt={blogtitle} />
      <div className={styles.blogText}>
        {blogcontent.map((paragraph, index) => (
          <p key={index}>
            {paragraph.children.map((child, childIndex) =>
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
};

export default BlogListItem;
