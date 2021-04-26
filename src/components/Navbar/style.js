import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  .navbar {
    width: 1310px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: ${({ open }) => (open ? "30px" : "0")};
      transition: margin-bottom 0.3s ease-in;
    }
  }

  .items-link {
    display: flex;
    width: 450px;
    justify-content: space-between;
  }
  .login {
    font-size: 1.2rem;
    border: none;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Montserrat", sans-serif;
    font-weight: 500;

    @media (max-width: 768px) {
      overflow: hidden;
      position: absolute;
      margin-left: 500px;
      top: 80px;
      border: 1px solid red;

      max-height: ${({ isOpen }) => (isOpen ? "120px" : "0")};
      transition: max-height 0.3s ease-in;
    }
  }
  .logout {
    font-size: 1.2rem;
    background-color: unset;
    border: none;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  .img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .sa {
    width: 600px;
  }
  .toggle {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  span {
    width: 35px;
    height: 2px;
    color: red;
    background-color: red;
    margin: auto;
  }
  .aaa {
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  text-align: center;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    float: left;
    direction: ltr;
  }
`;
