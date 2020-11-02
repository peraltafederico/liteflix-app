import styled from 'styled-components'
import CommonUserLogo from '../../UserLogo/UserLogo'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;

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

export const UserLogo = styled(CommonUserLogo)`
  margin-right: 4px;
`

export const ArrowIcon = styled.img`
  margin-left: 4px;
`
