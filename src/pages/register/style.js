import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  direction: rtl;
  width: 730px;
  margin: auto;
  margin-top: 50px;

  margin-bottom: 320px;
  span {
    color: red;
  }
  .form {
    width: 730px;
    height: 276px;
    margin: auto;
    display: flex;
    flex-direction: column;
    direction: rtl;
  }
  .title-register {
    font-size: 1.75rem;
    font-weight: 600px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .email {
    width: 110px;
    height: 24px;
    color: #343a40;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }

  .email-input {
    width: 100%;
    padding: 10px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 15px;
  }
  .name {
    width: 110px;
    height: 24px;
    color: #343a40;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .name-input {
    width: 100%;
    padding: 10px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 15px;
  }
  .userName {
    display: flex;
    width: 160px;
    height: 24px;
    color: #343a40;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .userName-input {
    width: 100%;
    padding: 10px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 15px;
  }
  .phone {
    width: 110px;
    height: 24px;
    color: #343a40;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .phone-input {
    width: 100%;
    padding: 10px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    margin-bottom: 15px;
    outline: none;
  }
  .password {
    width: 110px;
    height: 24px;
    color: #343a40;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .password-input {
    width: 100%;
    padding: 10px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    /* margin-bottom: 15px; */
    margin-bottom: 55px;
  }
  .btn {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    cursor: pointer;
  }
  .other-link {
    margin-top: 10px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 800;
    color: #343a40;
  }
  .other-link a {
    text-decoration: none;
    color: #343a40;
  }
  .other-link a:hover {
    text-decoration: underline;
    color: blue;
  }
`;
