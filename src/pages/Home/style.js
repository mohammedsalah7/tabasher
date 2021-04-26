import styled from "styled-components";
import Banner from "../../assets/banner.jpg";
export const Container = styled.div`
  margin-bottom: 30px;
  .banner {
    height: 500px;
    background-image: url(${Banner});
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
  .titels {
    width: 400px;
    height: 200px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
