import React from "react";

interface Props {
  link: string;
}

function CategoryButton({ link }: Props) {
  return (
    <div className="card-img-overlay d-flex align-items-center justify-content-center">
      <a className="btn btn-light p-3 pointer" href={link}>
        <span className="card-title mb-0 fw-bold">View Details</span>
      </a>
    </div>
  );
}

export default CategoryButton;
