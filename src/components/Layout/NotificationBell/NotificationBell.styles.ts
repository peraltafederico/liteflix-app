import styled from 'styled-components'

export const Container = styled.div<{ notification?: boolean }>`
  position: relative;

  &:after {
    position: absolute;
    display: ${(props) => (props.notification ? 'block' : 'none')};
    width: 6px;
    height: 6px;
    content: '';
    right: 1px;
    top: 2px;
    background-color: red;
    border-radius: 50%;
  }
`

export const NotificationIcon = styled.img``
