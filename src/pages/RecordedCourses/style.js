import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  .cards {
    margin: auto;
    display: flex;
    flex-direction: column;
    direction: rtl;
    width: 400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f7f7f7;
    box-shadow: 0 1px #fff;
    border-radius: 15px;
    height: 535px;
  }
  .join {
    width: 380px;
    margin: auto;
    padding: 0.5rem 1rem;
    background-color: #fff;
    border: 1px solid;
    color: #6c757d;
    border-color: #6c757d;
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 15px;
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    border-radius: 0.3rem;
  }
  .join a {
    text-decoration: none;
    color: #6c757d;
  }
`;
