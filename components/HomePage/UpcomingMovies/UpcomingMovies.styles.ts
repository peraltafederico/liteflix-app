import styled from 'styled-components'
import { tablet } from '../../../utils/breakpoints'
import CommonMovieCategory from '../../commons/MovieCategory/MovieCategory'

export const MovieCategory = styled(CommonMovieCategory)`
  margin-top: -60px;

  ${tablet} {
    & > h2 {
      margin-bottom: 20px;
    }
  }
`
