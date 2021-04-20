import styled from "styled-components";
import Banner from "../../assets/banner.jpg";
export const Container = styled.div`
  /* border: 1px solid red; */
  margin-top: 20px;
  .banner {
    height: 500px;
    background-image: url(${Banner});
    /* linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.3rem;
  }
  .title {
    height: 500px;
    border-radius: 0.3rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  h2 {
    font-size: 3rem;
    font-weight: 500px;
  }
  h3 {
    font-size: 2.5rem;
  }
`;

// Main color: #5bb68d
// Secondary color: black
// Light color: #6c757
