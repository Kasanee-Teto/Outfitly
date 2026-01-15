import React from "react";
import { NavLink } from "react-router-dom";

const BlogList = ({ posts }) => {
  return (
    <div className="row g-4 justify-content-center mt-4">
      {posts.map(post => (
        <div key={post.id} className="col-md-6 col-lg-4">
          <article className="card h-100 shadow-sm border-0">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <span className="d-inline-block small fw-semibold text-primary mb-2">{post.category}</span>
              <h2 className="fs-5 fw-semibold mb-3">{post.title}</h2>
              <p className="text-muted">{post.description}</p>
              <NavLink to={`/post/${post.id}`} className="btn btn-outline-primary mt-3">
                Baca Selengkapnya
              </NavLink>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
