import React, { useState, useEffect } from "react";
import { HomeAminPage } from "./Style/HomeAminPage";
import { Helmet } from "react-helmet";
import ResourceCard from "./ResourceCard";

function AdminHomePage() {
  const [activeTab, setActiveTab] = useState("Resources");
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setResources(data);
      });
  }, []);

  useEffect(() => {
    let filtered = resources;

    if (activeTab === "Requests") {
      filtered = resources.filter((resource) => resource.tag === "request");
    } else if (activeTab === "Users") {
      filtered = resources.filter((resource) => resource.tag === "user");
    }

    if (searchTerm) {
      filtered = filtered.filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(filtered);
    setCurrentPage(1);
  }, [activeTab, resources, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResources.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container ">
      <Helmet>
        <style>{HomeAminPage}</style>
      </Helmet>
      <div className="admin-home-page-section">
        <div className="three-tabs">
          <div
            onClick={() => setActiveTab("Resources")}
            className={`tab-1 tab-comman ${
              activeTab === "Resources" ? "active-tab" : ""
            }`}
          >
            Resources
          </div>
          <div
            onClick={() => setActiveTab("Requests")}
            className={`tab-2 tab-comman ${
              activeTab === "Requests" ? "active-tab" : ""
            }`}
          >
            Requests
          </div>
          <div
            onClick={() => setActiveTab("Users")}
            className={`tab-3 tab-comman ${
              activeTab === "Users" ? "active-tab" : ""
            }`}
          >
            Users
          </div>
        </div>
        <div className="search-input">
          <div className="search-iput-area">
            <img
              className="search-icon"
              src={`${process.env.PUBLIC_URL}/serarch_icon.png`}
              alt="search icon"
            />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="resource-list">
          {currentItems.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        <div className="pagination">{renderPageNumbers()}</div>
      </div>
    </div>
  );
}

export default AdminHomePage;
