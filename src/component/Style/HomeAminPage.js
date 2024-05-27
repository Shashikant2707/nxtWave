export const HomeAminPage = `


.container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  
}
.admin-home-page-section {
    margin-top: 40px;
}
.search-input {
    margin: 20px 0;
}
.search-iput-area input[type="text"] {
    border: none;
    width: 100%;
}
.search-iput-area input[type="text"]:focus {
    outline: none;
    box-shadow: none;
}
.search-iput-area {
    display: flex;
    max-width: 650px;
    width: 100%;
    border: 1px solid #D7DFE9;
    padding: 10px;
    align-items: center;
    gap: 10px;
}
.search-iput-area img {
    max-width: 10px;
    width: 100%;
    height: 100%;
}
.three-tabs {
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: auto;
    width: 100%;
    border: 1px solid #D7DFE9;
    border-radius: 4px;
}
.tab-2 {
    border-left: 1px solid #D7DFE9;
    border-right: 1px solid #D7DFE9;
}
.tab-comman {
    flex: 1;
    padding: 10px 0px;
}
.three-tabs .active-tab {
    background: #0B69FF;
    color: #fff;
}
.tab-3.tab-comman.active-tab {
    border-top-right-radius: 4px;
    border-bottom: antiquewhite;
    border-bottom-right-radius: 4px;
}
.tab-1.tab-comman.active-tab {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}





.resource-list {
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .resource-card h3 {
    text-align: left;
    font-size: 14px;
}
.resource-card p {
    text-align: left;
}
  
  .resource-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(33.333% - 40px);
  }
  
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  
  .pagination button {
    margin: 0 5px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .pagination button:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
  .resource-card img {
    max-width: 44px;
    width: 100%;
    height: 100%;
}
.icon-and-title {
    display: flex;
    gap: 10px;
    align-items: center;
}
@media screen and (max-width: 700px){
    .resource-list {
        grid-template-columns: 1fr 1fr;
    }
}
`;
