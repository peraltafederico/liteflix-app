import styled from 'styled-components'

export const Container = styled.div<{ show: boolean }>`
  width: 228px;
  z-index: 999;
  background-color: #000000;
  display: flex;
  flex-flow: column;
  transition: transform 0.5s;
  padding: 12px 20px 12px 12px;
  color: #ffffff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform 0.5s;
  overflow-y: auto;
  height: 100%;

  transform: ${(props) =>
    props.show ? 'translateX(0px)' : 'translateX(-100%)'};

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const BurgerIcon = styled.img`
  margin-right: 10px;
  cursor: pointer;
`

export const Logo = styled.img`
  margin-left: 10px;
`

export const User = styled.div`
  display: flex;
  background-color: #222222;
  padding: 7px;
  width: 193px;
  max-height: 37px;
  box-sizing: border-box;
  border-radius: 18.5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;
`

export const UserIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 4px;
`

export const UserName = styled.span`
  font-size: 12px;
  letter-spacing: 0;
  margin-left: 4px;
  font-weight: normal;
`

export const SettingsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 18px;
`

export const Setting = styled.a`
  margin-bottom: 20px;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    height: 2px;
    bottom: -12px;
    background-color: #222222;
  }
`
export const SectionsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 18px;
`

export const Section = styled.a`
  font-size: 14px;
  margin-bottom: 8px;
`

export const SectionContainer = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  width: fit-content;
  margin-right: 7px;
`

export const PlusIcon = styled.img``

export const Logout = styled.span`
  font-weight: bold;
`
