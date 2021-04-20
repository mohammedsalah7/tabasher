import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  /* border: 1px solid red; */

  .cooker {
    width: 400px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    /* border: 1px solid red; */
  }
  .cooker-name {
    /* width: 150px;
    display: flex;
    margin: auto auto 100px auto;
    border: 1px solid red;
    align-items: center;
    text-align: center; */
    /* border: 1px solid red; */
    font-weight: 600;
    /* line-height: 1.2rem; */
    font-size: 2rem;
  }

  .img-cooker {
    /* border: 1px solid red; */
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  .work {
    /* border: 1px solid red; */
    font-weight: 500;
    /* line-height: 1.2rem; */
    font-size: 1.5rem;
  }
`;
