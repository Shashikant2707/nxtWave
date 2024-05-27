import React from "react";
import { HeaderCSS } from "./Style/HeaderCss";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const shouldShowAddButton = location.pathname !== "/add-resource";
  return (
    <div className="header-section">
      <Helmet>
        <style>{HeaderCSS}</style>
      </Helmet>
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/NxtWave_logo.png`}
        alt="logo"
      />

      <div className="header-addBtn-and-profice-icon">
        <a href="/login">Login</a>
        {shouldShowAddButton ? (
          <a href="/add-resource">+ ADD</a>
        ) : (
          <a href="/">resource</a>
        )}
        <img
          className="profice"
          src={`${process.env.PUBLIC_URL}/profile_icon.png`}
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Header;
