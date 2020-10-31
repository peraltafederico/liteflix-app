import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 999;
`

export const MenuContainer = styled.div<{ state: string }>`
  transition: 0.1s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  position: relative;
  z-index: 999;
`

export const Root = styled.div``
