import styled from 'styled-components'
import Card from '../MovieCard/MovieCard'
import { desktop, tablet } from '../../../utils/breakpoints'

export const MovieCard = styled(Card)`
  margin-bottom: 10px;

  ${tablet} {
    margin-bottom: 40px;
    width: 218px;
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
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fit, 218px);
    grid-gap: 1px;
  }

  ${desktop} {
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, 255px);
  }
`
