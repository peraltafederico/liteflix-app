import styled from 'styled-components'
import { desktop, tablet } from '../../../utils/breakpoints'

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div<{ size: 'small' | 'large' }>`
  width: 100%;
  position: relative;
  width: ${(props) => (props.size === 'large' ? '163px' : '100%')};
  height: ${(props) => (props.size === 'large' ? '328px' : '201px')};
  cursor: pointer;

  ${tablet} {
    width: ${(props) => (props.size === 'large' ? '255px' : '255px')};
    height: ${(props) => (props.size === 'large' ? '507px' : '155px')};
  }

  & img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  & ${DetailsContainer} {
    display: none;
  }

  ${desktop} {
    &:hover {
      & ${DetailsContainer} {
        display: block;
      }
    }
  }
`
