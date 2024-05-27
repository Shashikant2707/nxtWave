export const AddResourceCss = `
.add-resource-form {
    padding: 20px;
    align-items: center;
    border-radius: 5px;
  
    max-width: 600px;
    margin: 0 auto;
  }
  
  .add-resource-form form {
    display: flex;
    flex-direction: column;
  }
  
  .add-resource-form label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .add-resource-form input,
  .add-resource-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .add-resource-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-resource-form button:hover {
    background-color: #0056b3;
    
  }
  .add-resource-form .form-comman {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
  
.add-resource-form img {
  max-width: 500px;
  width: 100%;
}
.add-resource-form {
  display: flex;
  gap: 40px;
}
@media screen and (max-width: 700px){
  .add-resource-form {
    flex-direction: column;
  }
}
  `;
