import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .all-video {
    display: flex;
    flex-direction: column;
    direction: rtl;
  }
  .all {
    width: 400px;
    direction: rtl;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-right: 15px;
  }

  .table-1 {
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    flex-direction: column;
    width: 350px;
  }
  .department {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .table-1:last-child {
    border-top: none;
    margin-top: -1px;
  }
  .span-1 {
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: black;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
    margin-left: 15px;
    display: flex;
    color: #007bff;
  }
  .span-1:hover {
    text-decoration: underline;
  }

  .Dep-span-1 {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2;
    color: #6c757d;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .dec-1 {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .dec-2 {
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
    background: none;
    border: none;
    cursor: pointer;
  }
  .dec-2:hover {
    text-decoration: underline;
  }
`;
