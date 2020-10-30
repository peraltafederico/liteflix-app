import styled from 'styled-components'
import Card from '../UI/MovieCard/MovieCard'
import { desktop, tablet } from '../../utils/breakpoints'

export const MovieCard = styled(Card)`
  margin-bottom: 10px;

  ${tablet} {
    width: 212px;
  }

  ${desktop} {
    width: 255px;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    display: grid;
    justify-content: space-between;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, 212px);
  }

  ${desktop} {
    grid-template-columns: repeat(auto-fit, 255px);
  }
`
