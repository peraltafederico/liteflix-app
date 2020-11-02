import styled from 'styled-components'

export const Container = styled.div<{ notification?: boolean }>`
  position: relative;
  cursor: pointer;

  &:after {
    position: absolute;
    display: ${(props) => (props.notification ? 'block' : 'none')};

    content: '';
    right: 1px;
    top: 2px;
    background-color: red;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    animation: appear 0.8s ease-out;

    @keyframes appear {
      0% {
        transform: scale(0, 0);
      }

      25% {
        transform: scale(1, 1);
      }

      75% {
        transform: scale(1.4, 1.4);
      }

      100% {
        transform: scale(1, 1);
      }
    }
  }
`

export const NotificationIcon = styled.img``
