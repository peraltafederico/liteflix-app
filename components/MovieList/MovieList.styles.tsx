import styled from 'styled-components'
import Card from '../UI/MovieCard/MovieCard'
import { tablet } from '../../utils/breakpoints'

export const MovieCard = styled(Card)`
  margin-bottom: 10px;
  margin: 0 2px;

  ${tablet} {
    margin-right: 23px;
    margin-bottom: 0;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    flex-wrap: nowrap;
  }
`
