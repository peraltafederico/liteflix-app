import styled from 'styled-components'
import { desktop, tablet } from '../../../utils/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  margin: 0 auto;
  margin-bottom: 45px;
  padding: 0 15px;

  ${tablet} {
    max-width: 1112px;
    padding: 0 15px;
    /* margin-top: -80px; */
  }

  ${desktop} {
    padding: 0 30px;
  }
`

export const Title = styled.h2`
  margin: 0 0 10px 0;

  ${tablet} {
    padding: 0;
  }
`
