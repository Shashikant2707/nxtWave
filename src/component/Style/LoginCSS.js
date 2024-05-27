export const LoginCSS = `
.login-page {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 40px auto;
  }
  
  .login-page form {
    display: flex;
    flex-direction: column;
  }
  .number {
    display: flex;
    justify-content: space-between;
}
  
  .login-page label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .login-page input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-page button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-page button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
