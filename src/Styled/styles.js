import styled from "styled-components";

export const Message = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  background: #fff;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: inherit;

  svg {
    color: red;
    width: 30px;
    height: 30px;
    margin: auto 0;
  }
  span {
    text-align: center;
    font-weight: 600;
  }
  
`;