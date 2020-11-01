import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  position: relative;

  & a {
    margin: 0 8px;
  }
`

export const Link = styled.a<{ highlight?: boolean }>`
  text-decoration: none;
  color: #fff;
  letter-spacing: 0;
  font-size: 14px;

  font-weight: ${(props) => (props.highlight ? 'bold' : 'normal')};


`
