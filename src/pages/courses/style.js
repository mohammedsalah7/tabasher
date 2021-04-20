import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  direction: rtl;

  .titel {
    width: 150px;
    display: flex;
    margin: auto auto 100px auto;
    /* border: 1px solid red; */
    align-items: center;
    text-align: center;
  }
  .courses {
    /* border: 1px solid red; */
  }
  .courses .sub-title {
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.2;
    display: block;
    /* font-size: 1.5em; */
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Montserrat";
  }
  section {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f7f7f7;
    box-shadow: 0 1px #fff;
    border-radius: 15px;
    height: 535px;
  }
  .title-courses {
    width: 360px;
    font-size: 1.4rem;
    font-weight: 600px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 10px;
  }
  .price {
    width: 350px;
    font-size: 1.25rem;
    font-weight: 400px;
    margin-top: -20px;
    margin-bottom: 10px;
    margin-right: 10px;
    color: #6c757d;
  }
  .info {
    /* width: 350px; */
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 15px;

    color: #212529;
    margin-right: 10px;
    line-height: 1.5rem;
  }

  .img-coureses {
    width: 399px;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: auto;
    display: flex;
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
