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
