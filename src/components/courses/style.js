import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  .all {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 15px;
  }

  .courses .sub-title {
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Montserrat";
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
