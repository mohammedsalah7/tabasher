import styled from "styled-components";

export const Container = styled.div`
  .courses {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f7f7f7;
    box-shadow: 0 1px #fff;
    border-radius: 15px;
    height: 535px;
    display: flex;
    flex-direction: column;

    direction: rtl;
    margin: 15px;
  }
  .title-courses {
    width: 350px;
    font-size: 1.2rem;
    font-weight: 600px;
    margin-top: 15px;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .price {
    width: 350px;
    font-size: 1rem;
    font-weight: 400px;
    margin-top: -20px;
    margin-bottom: 10px;
    margin-right: 10px;
    color: #6c757d;
  }
  .info {
    max-width: 360px;

    height: 100px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #212529;
    margin-right: 10px;
    line-height: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .img-coureses {
    height: 100px;
    width: 399px;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
  }
`;
