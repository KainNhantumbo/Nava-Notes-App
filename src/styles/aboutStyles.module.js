import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from './colors';

export const AboutContainer = styled.section`
  @keyframes aboutAnimation {
    from {
      border: 2px solid ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgb(${colors.primaryColor})`
        } else {
          return `rgb(${colors.secondaryColor})`
        }
      }};
      transition: .5s ease-in-out;
    }
    
    to {
      border: 2px solid ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgba(${colors.textColor}, .8)`
        } else {
          return `rgb(${colors.primaryColor})`
        }
      }};
      transition: .5s ease-in-out;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 90%;
    max-width: 400px;
    margin: .5em 0;
    position: relative;
    padding: 10px 8px;
    line-height: 2em;
    border-radius: 12px;
    color: rgba(${colors.textColor}, .8);
    border: 2px solid transparent;
    animation: aboutAnimation 2000ms ease-in-out forwards infinite;
    user-select: none;
    box-shadow: 0 0 5px ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgba(${colors.fullDarkColor}, .6)`
      } else {
        return `rgba(${colors.primaryColor}, .6)`
      }
    }};
    background: ${() => {
      if (colors.primaryColor === '135, 86, 112') {
        return `rgb(${colors.whiteColor})`
      } else {
        return `rgb(${colors.backgroundColor})`
      }
    }};

    section {
      text-align: center;
      font-weight: 600;
      color: ${() => {
        if (colors.primaryColor === '135, 86, 112') {
          return `rgb(${colors.primaryColor})`
        } else {
          return `rgb(${colors.primaryColor})`
        }
      }};
      line-height: 1.6rem;
      span {
        padding: 2px 8px;
        border-radius: 12px;
        color: ${() => {
          if (colors.primaryColor === '135, 86, 112') {
            return `rgba(${colors.textColor}, .5)`
          } else {
            return `rgb(${colors.secondaryColor})`
          }
        }};
      }
    }

  }

`;