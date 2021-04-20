import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid red; */
  height: 100px;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .login {
    font-size: 1.5rem;
    /* background-color: inherit; */
    border: none;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  .img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
