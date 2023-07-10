import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: inset rgba(0, 0, 0, 0.25) 0px 14px 28px,
    inset rgba(0, 0, 0, 0.22) 0px 10px 10px;

  & label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
  }

  & input {
    margin-top: 20px;
    border: 1px solid #ddd;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  & button {
    margin: 20px 0;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    color: black;
    font-size: 16px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.3s ease-in-out;
    scale: 1;
    &:hover {
      background-color: #777;
      color: white;
      box-shadow: inset rgba(255, 255, 255, 0.25) 0px 14px 28px,
        inset rgba(255, 255, 255, 0.22) 0px 10px 10px;
      scale: 1.2;
      translate: 10px;
    }
  }
`;
