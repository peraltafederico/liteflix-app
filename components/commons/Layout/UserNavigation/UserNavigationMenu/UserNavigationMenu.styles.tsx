import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  width: 130px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  top: 18px;
  right: 0;
  box-sizing: border-box;
  align-content: center;

  &:after {
    z-index: -1;
    position: absolute;
    content: '';
    width: 17px;
    height: 17px;
    background-color: #ffffff;
    right: 20.5px;
    top: -6px;
    transform: rotate(-315deg);
    border-radius: 5px;
  }
`

export const Users = styled.div`
  display: flex;
  flex-flow: column wrap;
`

export const UserContainer = styled.div<{ loggedIn?: boolean }>`
  max-width: 111px;
  padding: 6px 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: ${(props) => (props.loggedIn ? '#000000' : '#9b9b9b')};
  cursor: ${(props) => (props.loggedIn ? 'normal' : 'pointer')};

  box-shadow: ${(props) =>
    props.loggedIn ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none'};
  border-radius: ${(props) => (props.loggedIn ? '18.5px' : '0px')};
`

export const UserName = styled.span`
  font-size: 12px;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70px;
  margin-left: 5px;
`

export const Settings = styled.div`
  display: flex;
  flex-flow: column wrap;
`

export const Setting = styled.span<{ highlight?: boolean }>`
  display: flex;
  font-size: 12px;
  color: #000000;
  padding-bottom: 0;
  padding-top: 8px;
  font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};
  cursor: pointer;

  &:not(:last-child) {
    padding: 8px 0;
    border-bottom: solid 1px #cccccc;
  }
`
