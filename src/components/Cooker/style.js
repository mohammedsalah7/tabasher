import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;

  .cooker {
    width: 400px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .cooker-name {
    font-weight: 600;

    font-size: 2rem;
  }

  .img-cooker {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
  .work {
    font-weight: 500;

    font-size: 1.5rem;
  }
`;
