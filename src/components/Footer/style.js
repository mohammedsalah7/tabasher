import styled from "styled-components";

export const Container = styled.div`
  /* margin: 20px auto; */
  /* width: 400px; */
  /* /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* direction: rtl;  */
  /* border: 1px solid red; */
  padding: 25px;
  height: 140px;
  .Footer {
    /* width: 400px; */
    /* height: 380px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* margin-bottom: 20px; */
    /* border: 1px solid red; */
  }
  .left {
    /* border: 1px solid red; */
    height: 60px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .privicy {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 600;
  }

  .img-mada,
  .img-visa {
    /* border: 1px solid red; */
    width: 50px;
    height: 16px;
    /* border-radius: 50%; */
  }
  .rihgt {
    /* border: 1px solid red; */
    direction: rtl;
    height: 60px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 600;
  }
  .copy-rihgt {
    /* border: 1px solid red; */
  }
  .links-site-company {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid red; */
  }
  .link-site {
    text-decoration: none;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #5bb68d;
    margin-right: 1px;
  }
  .img-logo {
    width: 35px;
    height: 35px;
  }
`;
