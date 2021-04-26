import styled from "styled-components";
export const All = styled.div``;

export const Container = styled.div`
  margin-top: 20px;

  .show {
    display: flex;
    margin: auto;
    width: 1100px;
    justify-content: space-between;
  }
  .cards {
    display: flex;
    flex-direction: column;
    direction: rtl;
    width: 400px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #f7f7f7;
    box-shadow: 0 1px #fff;
    border-radius: 15px;
    height: 535px;
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
  .details {
    display: flex;
    flex-direction: column;
    direction: rtl;
    width: 650px;
  }
  .title-courses {
    margin-bottom: 15px;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .info-courses {
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5rem;
    display: flex;
  }
  .time {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .title-timer {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
  }
  .houres {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
  }

  .update {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .titel-up {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
  }
  .data-up {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
  }
  .details-courses {
    margin-bottom: 25px;
  }
  .description {
    margin-bottom: 15px;
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .description-text {
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden;
    color: #6c757d;
  }

  .new-learn {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .info-learn {
    color: #6c757d;
    font-size: 1rem;
    font-weight: 600;
  }
  .info-learn::after {
    content: ",";
  }
  .info-learn:last-child::after {
    content: "";
  }
  .subjects {
    margin-top: 30px;
    margin-bottom: 70px;
  }
  .title-subject {
    margin-bottom: 30px;
  }

  .table-1 {
    margin-bottom: 15px;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .department {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.03);
    padding: 1rem;
  }
  .span-1 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: black;
  }
  .Dep-span-1 {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2;
    color: #6c757d;
  }
  .dec-1 {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
  }
  .dec-2 {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
    border-top: none;
  }

  .table-2 {
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  .department-2 {
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.03);
    padding: 1rem;
  }
  .span-2 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: black;
  }
  .Dep-span-2 {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2;
    color: #6c757d;
  }
  .Dec-2 {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;
  }
`;
