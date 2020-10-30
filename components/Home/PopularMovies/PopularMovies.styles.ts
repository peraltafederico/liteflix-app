import styled from 'styled-components'
import { tablet } from '../../../utils/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  max-width: 1112px;
  margin: 25px auto;

  ${tablet} {
    padding: 0 30px;
    margin: 50px auto;
  }
`

export const Title = styled.h2`
  margin: 0 0 5px 0;
`
