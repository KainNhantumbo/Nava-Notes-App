import styled from "styled-components";

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin-bottom: .5em;
  padding: 1em;
  border-radius: inherit;
  user-select: none;
  gap: .8em;

  img {
    width: 80%;
  }
  span {
    text-align: center;
    font-weight: 600;
    background-color: #F0ECE3;
    padding: .5em;
    border-radius: 10px;
  }
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #C7B198;
  box-shadow: 0 1px 2px 0.5px rgba($primary-color, .6);
  position: fixed;
  top: 0;
  z-index: 50;

  h1 {
    font-weight: 600;
    margin: 0 auto;
    line-height: 5rem;
    user-select: none;
  }
  label {
    width: 15em;
    height: 1.9em;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1em;
    position: relative;

    input {
      width: inherit;
      border-style: none;
      border: none;
      border-radius: 15px;
      padding: 5px 40px 5px 10px;
      line-height: 5em;
        
      &:focus {
        box-shadow: 0 0 5px 1px rgba($primary-color, .9);
        outline: none;
      }
      &::placeholder {
        font-weight: 600;
      }
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      height: inherit;
      background-color: rgba($secondary-lighter-color, .5);
      border-style: none;
      border-radius:  50%;
      cursor: pointer;

      &:hover {
        background-color: rgba($primary-color, .3);
        transition: all .2s ease;
      }
    }
  }
`