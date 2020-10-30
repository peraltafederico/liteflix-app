import styled from 'styled-components'
import Card from '../UI/MovieCard/MovieCard'
import { tablet } from '../../utils/breakpoints'

export const MovieCard = styled(Card)`
  /* margin-bottom: 10px; */
  /* margin: 1px; */

  ${tablet} {
    margin-bottom: 0;
    flex-shrink: 0;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
    }
  }
`
