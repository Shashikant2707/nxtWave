import React from "react";

const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card">
      <div className="icon-and-title">
        <img src={resource.icon_url} alt={resource.title} />
        <div className="title-and-tag">
          <h3>{resource.title}</h3>
          <p>Tag: {resource.tag}</p>
        </div>
      </div>
      <a href={resource.link} target="_blank" rel="noopener noreferrer">
        More Info
      </a>

      <p>Category: {resource.category}</p>

      <p>{resource.description}</p>
    </div>
  );
};

export default ResourceCard;
