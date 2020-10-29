import styled from 'styled-components'

export const MovieLogo = styled.svg`
  animation: move 0.5s linear infinite;
  animation-direction: alternate;

  @keyframes move {
    0% {
      transform: rotateZ(10deg);
    }

    50% {
    }

    100% {
      transform: rotateZ(-30deg);
    }
  }
`
