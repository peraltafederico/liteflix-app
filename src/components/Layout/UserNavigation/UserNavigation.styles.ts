import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: 'white';

  & > * {
    margin: 0 8px;
  }
`

export const Section = styled.a`
  text-decoration: none;
  color: #fff;
  letter-spacing: 0;
  font-size: 14px;
`

export const Notification = styled.div<{ notification?: boolean }>`
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

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const UserIcon = styled.img`
  margin-right: 4px;
`

export const ArrowIcon = styled.img`
  margin-left: 4px;
`
