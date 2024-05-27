import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddResourceCss } from "./Style/AddResourceCss";
import { Helmet } from "react-helmet";

const AddResourceForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const validateForm = () => {
    if (!name || !link || !description) {
      toast.error("All fields are required.");
      return false;
    }
    if (name.length > 50) {
      toast.error("Name should not exceed 50 characters.");
      return false;
    }
    if (description.length > 200) {
      toast.error("Description should not exceed 200 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newResource = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      link,
      description,
      tag_name: "resource",
    };

    fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newResource),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          toast.success("Resource added successfully!");
          setName("");
          setLink("");
          setDescription("");
        } else {
          toast.error("Failed to add resource. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Failed to add resource. Please try again.");
      });
  };

  return (
    <div className="add-resource-form">
      <Helmet>
        <style>{AddResourceCss}</style>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className="name form-comman">
          <h3>Add a Resource</h3>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="text form-comman">
          <label>Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div className="des form-comman">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
      <ToastContainer position="bottom-center" />
      <div>
        <img
          className="create-img"
          src={`${process.env.PUBLIC_URL}/create-img.png`}
          alt="create"
        />
      </div>
    </div>
  );
};

export default AddResourceForm;
