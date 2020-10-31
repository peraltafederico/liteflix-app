import styled from 'styled-components'

export const Container = styled.div<{ transparent?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.transparent ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
  z-index: 999;
`
