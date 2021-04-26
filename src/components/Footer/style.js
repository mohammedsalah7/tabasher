import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  height: 140px;
  .Footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .left {
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
    width: 50px;
    height: 16px;
  }
  .rihgt {
    direction: rtl;
    height: 60px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 600;
  }

  .links-site-company {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .link-site {
    text-decoration: none;

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
